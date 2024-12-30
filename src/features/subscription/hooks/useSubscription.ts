import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '../../../lib/supabase';
import { useAuth } from '../../../hooks/useAuth';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function useSubscription() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: subscription, isLoading } = useQuery({
    queryKey: ['subscription', user?.id],
    queryFn: async () => {
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const createSubscription = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('User not authenticated');

      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (!stripe) throw new Error('Stripe not initialized');
      
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['subscription', user?.id]);
    },
  });

  const cancelSubscription = useMutation({
    mutationFn: async () => {
      if (!user || !subscription) throw new Error('No active subscription');

      const response = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriptionId: subscription.stripe_subscription_id }),
      });

      if (!response.ok) throw new Error('Failed to cancel subscription');
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['subscription', user?.id]);
    },
  });

  return {
    subscription,
    isLoading,
    createSubscription,
    cancelSubscription,
  };
}