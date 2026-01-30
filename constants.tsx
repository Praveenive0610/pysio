
import { Service, Testimonial, Stat } from './types';

export const COLORS = {
  primary: '#E91E63',      // Vibrant Pink/Magenta
  secondary: '#FCE4EC',    // Light Pink
  accent: '#E91E63',       // Same as primary for consistency
  light: '#FFF5F7',        // Very light pink background
  white: '#ffffff',
  text: '#1a1a2e',         // Dark text
  textLight: '#6b7280'     // Gray text
};

export const SERVICES: Service[] = [
  {
    id: 'prenatal',
    title: 'Prenatal Care',
    description: 'Specialized treatment for pregnancy-related discomfort, preparing your body for childbirth with safe exercises.',
    icon: '🤰'
  },
  {
    id: 'postpartum',
    title: 'Postpartum Recovery',
    description: 'Comprehensive postnatal rehab to recover strength, address diastasis recti, and restore core function.',
    icon: '👶'
  },
  {
    id: 'pelvic',
    title: 'Pelvic Floor Therapy',
    description: 'Expert treatment for pelvic floor dysfunction and pain using evidence-based techniques.',
    icon: '💪'
  },
  {
    id: 'wellness',
    title: 'Women\'s Wellness',
    description: 'Holistic approach including menopause management, chronic pain relief, and wellness optimization.',
    icon: '🧘'
  },
  {
    id: 'sports',
    title: 'Sports Rehabilitation',
    description: 'Specialized treatment for injuries with focus on women\'s unique biomechanics and recovery.',
    icon: '⚡'
  },
  {
    id: 'manual',
    title: 'Manual Therapy',
    description: 'Hands-on techniques including massage and joint mobilization for pain relief and mobility.',
    icon: '💆'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'New Mother',
    text: 'The prenatal care I received was exceptional. The exercises helped me manage back pain throughout my pregnancy.',
    initial: 'P'
  },
  {
    id: '2',
    name: 'Ananya Reddy',
    role: 'Patient',
    text: 'After years of pelvic pain, I finally found relief. The team is professional, caring, and truly understands women\'s health.',
    initial: 'A'
  },
  {
    id: '3',
    name: 'Meera Iyer',
    role: 'Postpartum Patient',
    text: 'The postpartum recovery program helped me regain my strength. The personalized approach made all the difference.',
    initial: 'M'
  }
];

export const STATS: Stat[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '2000+', label: 'Women Helped' },
  { value: '98%', label: 'Satisfaction Rate' }
];
