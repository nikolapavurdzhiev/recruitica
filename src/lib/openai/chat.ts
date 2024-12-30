import { openai } from './client';
import { CHAT_SYSTEM_PROMPT } from './prompts';
import { openaiConfig } from '../config/openai';
import { findRelevantJobs } from '../../features/chat/utils/jobMatcher';
import { findRelevantCompanies } from '../../features/chat/utils/companyMatcher';
import { formatJobResponse, formatCompanyResponse } from '../../features/chat/utils/responseFormatter';

export async function getChatResponse(message: string) {
  try {
    // Find relevant jobs
    const relevantJobs = findRelevantJobs(message);
    let companyResults = '';
    
    // Only search for companies if the query seems company-related
    if (message.toLowerCase().includes('company') || 
        message.toLowerCase().includes('companies') ||
        message.toLowerCase().includes('firm') ||
        message.toLowerCase().includes('agency')) {
      try {
        const relevantCompanies = await findRelevantCompanies(message);
        companyResults = formatCompanyResponse(relevantCompanies);
      } catch (error) {
        console.error('Error finding companies:', error);
        companyResults = 'Unable to fetch company information at the moment.';
      }
    }

    // Enhance the user's message with relevant data
    const enhancedMessage = `
User Query: ${message}

Relevant Jobs:
${formatJobResponse(relevantJobs)}

${companyResults ? `Relevant Companies:
${companyResults}` : ''}

Please provide a helpful response incorporating the above information when relevant.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: CHAT_SYSTEM_PROMPT
        },
        { role: 'user', content: enhancedMessage }
      ],
      model: openaiConfig.defaultModel,
      max_tokens: openaiConfig.maxTokens,
      temperature: openaiConfig.temperature,
      top_p: openaiConfig.topP,
      frequency_penalty: openaiConfig.frequencyPenalty,
      presence_penalty: openaiConfig.presencePenalty
    });

    return completion.choices[0]?.message?.content || 
      'I apologize, but I am unable to process your request at the moment.';
  } catch (error) {
    console.error('Chat error:', error);
    throw new Error('Failed to get chat response');
  }
}