/*
  # Update forum category icons
  
  1. Changes
    - Updates the icon for 'Tools & Technology' category from 'Tool' to 'Wrench'
    
  2. Notes
    - Uses safe update approach to avoid conflicts
    - Only updates existing category without recreating
*/

-- Update the icon for Tools & Technology category
UPDATE forum_categories 
SET icon = 'Wrench'
WHERE slug = 'tools-tech';