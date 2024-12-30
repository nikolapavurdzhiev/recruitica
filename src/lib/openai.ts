import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, API calls should go through a backend
});

export async function getChatResponse(message: string) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful customer support assistant for Recruitica, a recruitment platform. 
          Your role is to help users with questions about the platform, recruitment best practices, and technical support.
          Be professional, friendly, and concise in your responses.`
        },
        { role: 'user', content: message }
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 
      'I apologize, but I am unable to process your request at the moment.';
  } catch (error) {
    console.error('Chat error:', error);
    throw new Error('Failed to get chat response');
  }
}