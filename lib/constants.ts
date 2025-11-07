// Contact Stages
export const CONTACT_STAGES = {
  NOT_INTERESTED: 'not_interested',
  NURTURE: 'nurture',
  ENGAGED: 'engaged',
  ACTIVE_BUYER: 'active_buyer',
  ACTIVE_SELLER: 'active_seller',
  UNDER_CONTRACT: 'under_contract',
  ESCROW: 'escrow',
  CLOSED: 'closed',
} as const

export const CONTACT_STAGE_LABELS = {
  [CONTACT_STAGES.NOT_INTERESTED]: 'Not Interested',
  [CONTACT_STAGES.NURTURE]: 'Nurture',
  [CONTACT_STAGES.ENGAGED]: 'Engaged',
  [CONTACT_STAGES.ACTIVE_BUYER]: 'Active Buyer',
  [CONTACT_STAGES.ACTIVE_SELLER]: 'Active Seller',
  [CONTACT_STAGES.UNDER_CONTRACT]: 'Under Contract',
  [CONTACT_STAGES.ESCROW]: 'Escrow',
  [CONTACT_STAGES.CLOSED]: 'Closed',
} as const

// Transaction Milestones
export const MILESTONES = {
  OFFER_ACCEPTED: 'offer_accepted',
  INSPECTION: 'inspection',
  APPRAISAL: 'appraisal',
  LOAN_DOCS: 'loan_docs',
  CLOSING: 'closing',
} as const

export const MILESTONE_LABELS = {
  [MILESTONES.OFFER_ACCEPTED]: 'Offer Accepted',
  [MILESTONES.INSPECTION]: 'Inspection',
  [MILESTONES.APPRAISAL]: 'Appraisal',
  [MILESTONES.LOAN_DOCS]: 'Loan Documents',
  [MILESTONES.CLOSING]: 'Closing',
} as const

// Service Categories
export const SERVICE_CATEGORIES = {
  CLEANING: 'cleaning',
  ELECTRICAL: 'electrical',
  MOVERS: 'movers',
  HANDYMAN: 'handyman',
  PAINTING: 'painting',
  LANDSCAPING: 'landscaping',
  GENERAL_CONTRACTOR: 'general_contractor',
  HOME_INSPECTOR: 'home_inspector',
  PHOTOGRAPHER: 'photographer',
  WINDOW_CLEANING: 'window_cleaning',
  PLUMBING: 'plumbing',
  HVAC: 'hvac',
} as const

export const SERVICE_CATEGORY_LABELS = {
  [SERVICE_CATEGORIES.CLEANING]: 'Cleaning',
  [SERVICE_CATEGORIES.ELECTRICAL]: 'Electrical',
  [SERVICE_CATEGORIES.MOVERS]: 'Movers',
  [SERVICE_CATEGORIES.HANDYMAN]: 'Handyman',
  [SERVICE_CATEGORIES.PAINTING]: 'Painting',
  [SERVICE_CATEGORIES.LANDSCAPING]: 'Landscaping',
  [SERVICE_CATEGORIES.GENERAL_CONTRACTOR]: 'General Contractors',
  [SERVICE_CATEGORIES.HOME_INSPECTOR]: 'Home Inspectors',
  [SERVICE_CATEGORIES.PHOTOGRAPHER]: 'Photographers',
  [SERVICE_CATEGORIES.WINDOW_CLEANING]: 'Window Cleaning',
  [SERVICE_CATEGORIES.PLUMBING]: 'Plumbing',
  [SERVICE_CATEGORIES.HVAC]: 'HVAC',
} as const

export const SERVICE_CATEGORY_ICONS = {
  [SERVICE_CATEGORIES.CLEANING]: '🧹',
  [SERVICE_CATEGORIES.ELECTRICAL]: '⚡',
  [SERVICE_CATEGORIES.MOVERS]: '🚚',
  [SERVICE_CATEGORIES.HANDYMAN]: '🔧',
  [SERVICE_CATEGORIES.PAINTING]: '🎨',
  [SERVICE_CATEGORIES.LANDSCAPING]: '🌳',
  [SERVICE_CATEGORIES.GENERAL_CONTRACTOR]: '🔨',
  [SERVICE_CATEGORIES.HOME_INSPECTOR]: '🏠',
  [SERVICE_CATEGORIES.PHOTOGRAPHER]: '📸',
  [SERVICE_CATEGORIES.WINDOW_CLEANING]: '🪟',
  [SERVICE_CATEGORIES.PLUMBING]: '🚿',
  [SERVICE_CATEGORIES.HVAC]: '❄️',
} as const

// Themes
export const THEMES = {
  PROFESSIONAL: 'theme-professional',
  TECH: 'theme-tech',
  CLASSIC: 'theme-classic',
} as const

// User Roles
export const USER_ROLES = {
  AGENT: 'agent',
  CLIENT: 'client',
  VENDOR: 'vendor',
  MEMBER: 'member',
} as const

// Commission Splits
export const COMMISSION_SPLITS = {
  AGENT_PERCENTAGE: 0.7, // 70% to agent
  CLIENT_PERCENTAGE: 0.2, // 20% to client (as credits)
  PLATFORM_PERCENTAGE: 0.1, // 10% to platform
} as const

export const PLOT_COMMISSION_RATE = 0.1 // 10% of job value

// Referral Constants
export const REFERRAL_CREDIT_AMOUNT = 50 // $50 in Plot Credits per successful referral
export const MIN_PAYOUT_AMOUNT = 50 // Minimum $50 to withdraw

// FSBO À La Carte Services
export const FSBO_SERVICES = {
  PRICING_CONSULTATION: {
    name: 'Pricing Consultation',
    price: 99,
    description: 'Get expert pricing guidance based on market analysis',
  },
  CONTRACT_REVIEW: {
    name: 'Contract Review',
    price: 199,
    description: 'Professional review of purchase agreements and documents',
  },
  NEGOTIATION_HELP: {
    name: 'Negotiation Assistance',
    price: 299,
    description: 'Expert negotiation support for offers and counteroffers',
  },
  FULL_LISTING: {
    name: 'Full Listing Service',
    price: 2999,
    description: 'Complete listing service with MLS exposure',
  },
} as const
