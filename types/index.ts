// Database Types
export interface User {
  id: string
  email: string
  role: 'agent' | 'client' | 'vendor' | 'member'
  created_at: string
  updated_at: string
}

export interface Tenant {
  id: string
  name: string
  type: 'agent' | 'brokerage'
  agent_id?: string
  settings: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Contact {
  id: string
  tenant_id: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
  stage: ContactStage
  tags: string[]
  custom_fields: Record<string, any>
  portal_token?: string
  created_at: string
  updated_at: string
}

export type ContactStage =
  | 'not_interested'
  | 'nurture'
  | 'engaged'
  | 'active_buyer'
  | 'active_seller'
  | 'under_contract'
  | 'escrow'
  | 'closed'

export interface Transaction {
  id: string
  contact_id: string
  tenant_id: string
  property_id?: string
  type: 'buyer' | 'seller'
  status: TransactionStatus
  purchase_price?: number
  close_date?: string
  deal_team: DealTeam
  milestones: TransactionMilestone[]
  created_at: string
  updated_at: string
}

export type TransactionStatus =
  | 'active'
  | 'under_contract'
  | 'escrow'
  | 'closed'
  | 'cancelled'

export interface DealTeam {
  lender?: string
  lender_contact?: string
  escrow?: string
  escrow_contact?: string
  title?: string
  title_contact?: string
  inspector?: string
  inspector_contact?: string
}

export interface TransactionMilestone {
  id: string
  transaction_id: string
  type: MilestoneType
  status: 'pending' | 'in_progress' | 'completed'
  due_date?: string
  completed_at?: string
  responses?: Record<string, any>
  created_at: string
  updated_at: string
}

export type MilestoneType =
  | 'offer_accepted'
  | 'inspection'
  | 'appraisal'
  | 'loan_docs'
  | 'closing'

export interface Property {
  id: string
  address: string
  city: string
  state: string
  zip: string
  beds?: number
  baths?: number
  sqft?: number
  year_built?: number
  property_type?: string
  photos: string[]
  created_at: string
  updated_at: string
}

export interface MarketplaceVendor {
  id: string
  user_id: string
  company_name: string
  slug: string
  categories: ServiceCategory[]
  service_areas: string[]
  description: string
  certifications: string[]
  years_in_business?: number
  team_size?: number
  pricing_model: 'hourly' | 'project' | 'quote'
  average_project_cost?: string
  response_time_hours?: number
  portfolio_images: string[]
  rating: number
  review_count: number
  featured: boolean
  verified: boolean
  created_at: string
  updated_at: string
}

export type ServiceCategory =
  | 'cleaning'
  | 'electrical'
  | 'movers'
  | 'handyman'
  | 'painting'
  | 'landscaping'
  | 'general_contractor'
  | 'home_inspector'
  | 'photographer'
  | 'window_cleaning'
  | 'plumbing'
  | 'hvac'

export interface ServiceRequest {
  id: string
  contact_id: string
  vendor_id: string
  category: ServiceCategory
  property_address: string
  description: string
  preferred_date?: string
  budget_range?: string
  urgency: 'routine' | 'urgent' | 'emergency'
  status: ServiceRequestStatus
  photos: string[]
  created_at: string
  updated_at: string
}

export type ServiceRequestStatus =
  | 'requested'
  | 'quoted'
  | 'accepted'
  | 'scheduled'
  | 'in_progress'
  | 'completed'
  | 'cancelled'

export interface ServiceBid {
  id: string
  bid_posting_id: string
  vendor_id: string
  amount: number
  proposal: string
  estimated_completion: string
  status: 'pending' | 'accepted' | 'declined'
  created_at: string
  updated_at: string
}

export interface BidPosting {
  id: string
  contact_id: string
  category: ServiceCategory
  property_address: string
  title: string
  description: string
  needed_by_date: string
  budget_range?: string
  urgency: 'routine' | 'urgent' | 'emergency'
  photos: string[]
  status: 'active' | 'closed'
  bids: ServiceBid[]
  created_at: string
  updated_at: string
}

export interface VendorReview {
  id: string
  vendor_id: string
  contact_id: string
  service_request_id: string
  rating: number
  review_text?: string
  photos: string[]
  vendor_response?: string
  created_at: string
  updated_at: string
}

export interface RewardsLedger {
  id: string
  contact_id: string
  amount: number
  type: 'referral' | 'vendor_booking' | 'bonus'
  source_id?: string
  description: string
  status: 'pending' | 'paid'
  created_at: string
}

export interface Referral {
  id: string
  referrer_contact_id: string
  referred_contact_id?: string
  referral_code: string
  status: 'clicked' | 'signed_up' | 'in_deal' | 'closed'
  credit_amount?: number
  created_at: string
  updated_at: string
}

export interface CallLog {
  id: string
  tenant_id: string
  contact_id?: string
  phone_number: string
  direction: 'inbound' | 'outbound'
  duration_seconds: number
  transcript: string
  summary: string
  sentiment: 'positive' | 'neutral' | 'negative'
  action_items: string[]
  recording_url?: string
  cost: number
  created_at: string
}

export interface ChatConversation {
  id: string
  contact_id: string
  type: 'agent' | 'portal'
  messages: ChatMessage[]
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  conversation_id: string
  sender: 'user' | 'assistant' | 'system'
  content: string
  metadata?: Record<string, any>
  created_at: string
}

export interface Activity {
  id: string
  contact_id: string
  type: ActivityType
  description: string
  metadata?: Record<string, any>
  created_at: string
}

export type ActivityType =
  | 'call'
  | 'email'
  | 'sms'
  | 'portal_login'
  | 'service_booking'
  | 'milestone_update'
  | 'document_upload'
  | 'note'

export interface Document {
  id: string
  contact_id?: string
  transaction_id?: string
  name: string
  category: string
  file_path: string
  file_size: number
  file_type: string
  confidential: boolean
  created_at: string
  updated_at: string
}

export interface CalendarEvent {
  id: string
  tenant_id?: string
  contact_id?: string
  title: string
  description?: string
  start_time: string
  end_time: string
  location?: string
  type: EventType
  attendees: string[]
  google_event_id?: string
  created_at: string
  updated_at: string
}

export type EventType =
  | 'milestone'
  | 'personal'
  | 'service'
  | 'meeting'

export interface Questionnaire {
  id: string
  tenant_id: string
  name: string
  qr_code: string
  questions: QuestionnaireQuestion[]
  submissions_count: number
  created_at: string
  updated_at: string
}

export interface QuestionnaireQuestion {
  id: string
  type: 'multiple_choice' | 'image_selection' | 'text' | 'budget_range'
  question: string
  options?: string[]
  required: boolean
}

export interface QuestionnaireSubmission {
  id: string
  questionnaire_id: string
  contact_id: string
  responses: Record<string, any>
  created_at: string
}

// UI Component Props
export interface Theme {
  name: string
  value: 'theme-professional' | 'theme-tech' | 'theme-classic'
}

export interface NotificationItem {
  id: string
  type: 'milestone' | 'document' | 'message' | 'service' | 'appointment' | 'referral'
  title: string
  description: string
  read: boolean
  created_at: string
}
