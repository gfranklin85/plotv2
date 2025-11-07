'use client'

import React, { useState } from 'react'
import {
  Calendar, Upload, Camera, Video, MessageSquare, Mic, Bell,
  ChevronRight, Check, Clock, DollarSign, MapPin, Award, Sparkles,
  Home, Star, TrendingUp, FileText, Download, Share2, Heart, ExternalLink,
  ChevronDown, X, Menu, Phone, ChevronLeft, Search, Filter, Users,
  Briefcase, Package, Plus, Send, Eye, ThumbsUp, AlertCircle, Gift
} from 'lucide-react'

interface ClientPortalContentProps {
  token: string
}

export default function ClientPortalContent({ token }: ClientPortalContentProps) {
  const [activeStep, setActiveStep] = useState(2)
  const [showChat, setShowChat] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [currentTheme, setCurrentTheme] = useState('professional')
  const [activeView, setActiveView] = useState('overview')

  // Modal States
  const [showVendorDirectory, setShowVendorDirectory] = useState(false)
  const [showServiceScheduling, setShowServiceScheduling] = useState(false)
  const [showBidPosting, setShowBidPosting] = useState(false)
  const [showActiveBids, setShowActiveBids] = useState(false)
  const [showMilestoneQuestions, setShowMilestoneQuestions] = useState(false)
  const [showDocuments, setShowDocuments] = useState(false)
  const [selectedVendor, setSelectedVendor] = useState<any>(null)
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null)
  const [vendorCategory, setVendorCategory] = useState('all')
  const [searchVendor, setSearchVendor] = useState('')
  const [favoriteVendors, setFavoriteVendors] = useState<number[]>([])

  // Calendar State
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  // Documents State
  const [documents] = useState([
    { id: 1, name: 'Purchase Agreement.pdf', type: 'Contract', uploadedBy: 'Agent', date: '2025-10-20', size: '2.4 MB' },
    { id: 2, name: 'Inspection Report.pdf', type: 'Report', uploadedBy: 'Inspector', date: '2025-10-28', size: '8.1 MB' },
    { id: 3, name: 'Title Insurance.pdf', type: 'Insurance', uploadedBy: 'Title Company', date: '2025-10-25', size: '1.2 MB' },
    { id: 4, name: 'Appraisal.pdf', type: 'Report', uploadedBy: 'Appraiser', date: '2025-11-01', size: '3.5 MB' },
  ])

  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', text: "Hey! Ready to schedule that home inspection? I've got three great inspectors available this week.", timestamp: '10:30 AM' },
    { sender: 'user', text: "Yes, let's do it! What times are available?", timestamp: '10:32 AM' },
    { sender: 'assistant', text: "Perfect! I can get you in Tuesday at 10am or Thursday at 2pm. Which works better?", timestamp: '10:33 AM' }
  ])

  // Vendors Data
  const vendors = [
    // Home Inspectors
    { id: 1, name: 'Precision Home Inspection', category: 'inspector', rating: 4.9, reviews: 247, price: 450, image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400', specialty: 'Full Property Inspection', turnaround: '24 hours', certified: true },
    { id: 2, name: 'Eagle Eye Inspections', category: 'inspector', rating: 4.8, reviews: 189, price: 425, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400', specialty: 'Commercial & Residential', turnaround: '48 hours', certified: true },
    { id: 3, name: 'Home Guard Inspection', category: 'inspector', rating: 4.7, reviews: 156, price: 400, image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400', specialty: 'First-Time Buyers', turnaround: '24 hours', certified: true },

    // Movers
    { id: 4, name: 'Swift Move Pros', category: 'mover', rating: 4.9, reviews: 312, price: 850, image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400', specialty: 'Local & Long Distance', turnaround: 'Flexible', certified: true },
    { id: 5, name: 'Careful Hands Moving', category: 'mover', rating: 4.8, reviews: 267, price: 800, image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400', specialty: 'Fragile Items Expert', turnaround: 'Same Week', certified: true },
    { id: 6, name: 'City Movers Co', category: 'mover', rating: 4.6, reviews: 198, price: 750, image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400', specialty: 'Budget Friendly', turnaround: 'Next Day', certified: false },

    // Cleaners
    { id: 7, name: 'Sparkle Clean Services', category: 'cleaner', rating: 4.9, reviews: 423, price: 250, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400', specialty: 'Deep Clean Specialists', turnaround: 'Same Day', certified: true },
    { id: 8, name: 'Fresh & Clean', category: 'cleaner', rating: 4.8, reviews: 356, price: 225, image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400', specialty: 'Eco-Friendly Products', turnaround: '24 hours', certified: true },
    { id: 9, name: 'Pristine Home Care', category: 'cleaner', rating: 4.7, reviews: 289, price: 200, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400', specialty: 'Move In/Out', turnaround: 'Next Day', certified: true },

    // Handyman
    { id: 10, name: 'Fix-It Fast', category: 'handyman', rating: 4.8, reviews: 278, price: 85, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', specialty: 'General Repairs', turnaround: 'Same Day', certified: true },
    { id: 11, name: 'Home Repair Heroes', category: 'handyman', rating: 4.7, reviews: 234, price: 75, image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400', specialty: 'Electrical & Plumbing', turnaround: '24 hours', certified: true },
    { id: 12, name: 'Mr. Fix All', category: 'handyman', rating: 4.6, reviews: 187, price: 65, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400', specialty: 'Quick Fixes', turnaround: 'Next Day', certified: false },

    // Landscapers
    { id: 13, name: 'Green Thumb Landscaping', category: 'landscaper', rating: 4.9, reviews: 198, price: 500, image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400', specialty: 'Design & Maintenance', turnaround: '1 Week', certified: true },
    { id: 14, name: 'Lawn Masters', category: 'landscaper', rating: 4.7, reviews: 167, price: 400, image: 'https://images.unsplash.com/photo-1541697039-e60fc4f03b46?w=400', specialty: 'Lawn Care', turnaround: 'Same Week', certified: true },
    { id: 15, name: 'Yard Perfect', category: 'landscaper', rating: 4.6, reviews: 134, price: 350, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', specialty: 'Basic Maintenance', turnaround: 'Flexible', certified: false },

    // Contractors
    { id: 16, name: 'Premier Contractors', category: 'contractor', rating: 4.9, reviews: 156, price: 2500, image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400', specialty: 'Full Remodels', turnaround: '2-4 Weeks', certified: true },
    { id: 17, name: 'Reliable Renovations', category: 'contractor', rating: 4.8, reviews: 134, price: 2000, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400', specialty: 'Kitchen & Bath', turnaround: '1-3 Weeks', certified: true },
    { id: 18, name: 'Build Right', category: 'contractor', rating: 4.7, reviews: 98, price: 1800, image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400', specialty: 'Repairs & Updates', turnaround: '1-2 Weeks', certified: true },
  ]

  // Active Bids
  const [activeBids] = useState([
    { id: 1, service: 'Deep Cleaning', vendor: 'Sparkle Clean Services', amount: 250, status: 'pending', submittedAt: '2 hours ago' },
    { id: 2, service: 'Deep Cleaning', vendor: 'Fresh & Clean', amount: 225, status: 'pending', submittedAt: '4 hours ago' },
    { id: 3, service: 'Lawn Maintenance', vendor: 'Lawn Masters', amount: 400, status: 'accepted', submittedAt: '1 day ago' },
  ])

  // Calendar Events
  const events = [
    { id: 1, title: 'Home Inspection', date: '2025-11-02', time: '10:00 AM', type: 'inspection', location: '2847 Olive Ave' },
    { id: 2, title: 'Appraisal Appointment', date: '2025-11-05', time: '2:00 PM', type: 'appraisal', location: '2847 Olive Ave' },
    { id: 3, title: 'Final Walkthrough', date: '2025-11-20', time: '11:00 AM', type: 'walkthrough', location: '2847 Olive Ave' },
    { id: 4, title: 'Closing', date: '2025-11-22', time: '9:00 AM', type: 'closing', location: 'Title Office' },
  ]

  // Milestone Questions
  const milestoneQuestions = {
    1: { // Offer Accepted
      title: 'Offer Accepted',
      questions: [
        { id: 'q1', question: 'Have you reviewed the purchase agreement?', type: 'yesno' },
        { id: 'q2', question: 'Do you understand all contingencies?', type: 'yesno' },
        { id: 'q3', question: 'Have you secured financing pre-approval?', type: 'yesno' },
        { id: 'q4', question: 'Any questions about the contract terms?', type: 'text' },
      ]
    },
    2: { // Inspection
      title: 'Home Inspection',
      questions: [
        { id: 'q1', question: 'Have you scheduled the home inspection?', type: 'yesno' },
        { id: 'q2', question: 'Do you plan to attend the inspection?', type: 'yesno' },
        { id: 'q3', question: 'Any specific areas of concern?', type: 'text' },
        { id: 'q4', question: 'Do you want radon or pest inspection?', type: 'yesno' },
      ]
    },
    3: { // Appraisal
      title: 'Property Appraisal',
      questions: [
        { id: 'q1', question: 'Has the lender ordered the appraisal?', type: 'yesno' },
        { id: 'q2', question: 'Do you have concerns about property value?', type: 'yesno' },
        { id: 'q3', question: 'Any recent improvements to note?', type: 'text' },
        { id: 'q4', question: 'Comparable sales research done?', type: 'yesno' },
      ]
    },
    4: { // Loan Docs
      title: 'Loan Documentation',
      questions: [
        { id: 'q1', question: 'Have you received loan estimate?', type: 'yesno' },
        { id: 'q2', question: 'All income documents submitted?', type: 'yesno' },
        { id: 'q3', question: 'Any questions about loan terms?', type: 'text' },
        { id: 'q4', question: 'Rate lock period confirmed?', type: 'yesno' },
      ]
    },
    5: { // Closing
      title: 'Closing Preparation',
      questions: [
        { id: 'q1', question: 'Final walkthrough completed?', type: 'yesno' },
        { id: 'q2', question: 'All repairs addressed?', type: 'yesno' },
        { id: 'q3', question: 'Wire transfer details confirmed?', type: 'yesno' },
        { id: 'q4', question: 'Moving plans finalized?', type: 'text' },
      ]
    },
  }

  const themes: Record<string, any> = {
    professional: {
      name: 'Professional',
      bgMain: 'bg-gradient-to-br from-gray-50 to-blue-50',
      bgCard: 'bg-white',
      bgHeader: 'bg-white',
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      primaryText: 'text-blue-600',
      primaryLight: 'bg-blue-50',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-600',
      border: 'border-gray-200',
      shadow: 'shadow-sm',
      shadowHover: 'hover:shadow-md',
    },
    tech: {
      name: 'Tech',
      bgMain: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      bgCard: 'bg-slate-800',
      bgHeader: 'bg-slate-800',
      primary: 'bg-cyan-500',
      primaryHover: 'hover:bg-cyan-600',
      primaryText: 'text-cyan-400',
      primaryLight: 'bg-cyan-500/10',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-200',
      textMuted: 'text-gray-300',
      border: 'border-slate-700',
      shadow: 'shadow-lg shadow-black/20',
      shadowHover: 'hover:shadow-xl hover:shadow-cyan-500/20',
    },
    classic: {
      name: 'Classic',
      bgMain: 'bg-gradient-to-br from-amber-50 via-white to-orange-50',
      bgCard: 'bg-white',
      bgHeader: 'bg-amber-50',
      primary: 'bg-amber-600',
      primaryHover: 'hover:bg-amber-700',
      primaryText: 'text-amber-700',
      primaryLight: 'bg-amber-50',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-600',
      border: 'border-amber-200',
      shadow: 'shadow',
      shadowHover: 'hover:shadow-lg',
    }
  }

  const theme = themes[currentTheme]

  const notifications = [
    { id: 1, type: 'milestone', title: 'Inspection reminder', message: 'Your home inspection is scheduled for tomorrow at 10:00 AM', time: '2 hours ago', unread: true },
    { id: 2, type: 'bid', title: 'New bid received', message: 'Fresh & Clean Services submitted a bid of $250', time: '5 hours ago', unread: true },
  ]

  const steps = [
    { id: 1, name: 'Offer Accepted', status: 'completed', date: '2025-10-20' },
    { id: 2, name: 'Inspection', status: 'active', date: '2025-11-02' },
    { id: 3, name: 'Appraisal', status: 'upcoming', date: '2025-11-05' },
    { id: 4, name: 'Loan Docs', status: 'upcoming', date: '2025-11-15' },
    { id: 5, name: 'Closing', status: 'upcoming', date: '2025-11-22' }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, {
        sender: 'user',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setNewMessage('')

      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          sender: 'assistant',
          text: "I've received your message. Let me help you with that!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
      }, 1000)
    }
  }

  const toggleFavorite = (vendorId: number) => {
    setFavoriteVendors(prev =>
      prev.includes(vendorId)
        ? prev.filter(id => id !== vendorId)
        : [...prev, vendorId]
    )
  }

  const filteredVendors = vendors.filter(vendor => {
    const matchesCategory = vendorCategory === 'all' || vendor.category === vendorCategory
    const matchesSearch = vendor.name.toLowerCase().includes(searchVendor.toLowerCase()) ||
                          vendor.specialty.toLowerCase().includes(searchVendor.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
  }

  const unreadNotificationsCount = notifications.filter(n => n.unread).length

  const categoryIcons: Record<string, any> = {
    inspector: Home,
    mover: Package,
    cleaner: Sparkles,
    handyman: Award,
    landscaper: Home,
    contractor: Briefcase
  }

  return (
    <div className={`min-h-screen ${theme.bgMain} ${theme.textPrimary}`}>
      {/* Header Bar */}
      <header className={`${theme.bgHeader} ${theme.border} border-b sticky top-0 z-40 ${theme.shadow}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className={`lg:hidden p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}>
                <Menu className={`w-5 h-5 ${theme.textSecondary}`} />
              </button>
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 ${theme.primary} rounded-xl flex items-center justify-center ${theme.shadow}`}>
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className={`text-xl font-bold ${theme.textPrimary}`}>Plot</h1>
                  <p className={`text-sm ${theme.textMuted} hidden sm:block`}>Client Portal</p>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <p className={`text-base ${theme.textSecondary} hidden md:block`}>Hey, Greg 👋</p>

              {/* Theme Selector */}
              <div className="hidden sm:flex items-center gap-2">
                <select
                  value={currentTheme}
                  onChange={(e) => setCurrentTheme(e.target.value)}
                  className={`px-3 py-2 ${theme.bgCard} ${theme.border} border rounded-lg text-sm ${theme.textPrimary} cursor-pointer ${theme.shadowHover} transition-shadow`}
                >
                  <option value="professional">Professional</option>
                  <option value="tech">Tech</option>
                  <option value="classic">Classic</option>
                </select>
              </div>

              {/* Notifications */}
              <button
                className={`relative p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className={`w-5 h-5 ${theme.textSecondary}`} />
                {unreadNotificationsCount > 0 && (
                  <span className={`absolute -top-1 -right-1 w-5 h-5 ${theme.primary} rounded-full flex items-center justify-center text-xs font-bold text-white`}>
                    {unreadNotificationsCount}
                  </span>
                )}
              </button>

              {/* User Menu */}
              <button className={`flex items-center gap-2 p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}>
                <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <ChevronDown className={`w-4 h-4 ${theme.textMuted} hidden sm:block`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className={`${theme.bgCard} ${theme.border} border-b sticky top-[72px] z-30`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto">
            {['overview', 'milestones', 'vendors', 'calendar', 'documents', 'rewards'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                  activeView === view
                    ? `${theme.primaryText} border-b-2 border-blue-600`
                    : `${theme.textMuted} hover:${theme.textSecondary}`
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content Area */}
          <div className="flex-1 space-y-4">

            {/* Overview View */}
            {activeView === 'overview' && (
              <>
                {/* Next Action Card */}
                <div className="relative overflow-hidden rounded-xl h-56">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=400&fit=crop"
                    alt="Property"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    currentTheme === 'professional' ? 'bg-gradient-to-r from-blue-900/90 to-blue-700/70' :
                    currentTheme === 'tech' ? 'bg-gradient-to-r from-cyan-900/90 to-purple-900/70' :
                    'bg-gradient-to-r from-amber-900/90 to-orange-700/70'
                  }`}></div>

                  <div className="relative z-10 flex flex-col justify-center h-full p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-white animate-pulse" />
                      <span className="text-xs font-semibold text-white/90 tracking-wide">NEXT ACTION</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Home Inspection</h2>
                    <p className="text-white/90 mb-4 text-sm">
                      Inspection contingency expires in <span className="font-bold text-white">7 days</span>.
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowVendorDirectory(true)}
                        className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2"
                      >
                        Browse Inspectors
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedMilestone(steps[1])
                          setShowMilestoneQuestions(true)
                        }}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg font-semibold transition-all border border-white/30"
                      >
                        View Checklist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Transaction Progress */}
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-4 ${theme.shadow}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-lg font-bold ${theme.textPrimary} flex items-center gap-2`}>
                      <TrendingUp className={`w-5 h-5 ${theme.primaryText}`} />
                      Transaction Progress
                    </h3>
                    <p className={`text-2xl font-bold ${theme.primaryText}`}>40%</p>
                  </div>

                  <div className="relative">
                    <div className={`absolute top-5 left-0 right-0 h-0.5 ${theme.border} border-t rounded-full`}>
                      <div
                        className={`h-full ${theme.primary} transition-all duration-500 rounded-full`}
                        style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
                      ></div>
                    </div>

                    <div className="relative flex justify-between">
                      {steps.map((step) => (
                        <button
                          key={step.id}
                          onClick={() => {
                            setActiveStep(step.id)
                            setSelectedMilestone(step)
                            setShowMilestoneQuestions(true)
                          }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                            step.status === 'completed'
                              ? `${theme.primary} text-white border-transparent`
                              : step.status === 'active'
                              ? `${theme.bgCard} ${theme.primaryText} border-blue-600 animate-pulse`
                              : `${theme.bgCard} ${theme.textMuted} ${theme.border}`
                          }`}>
                            {step.status === 'completed' ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <span className="text-xs font-bold">{step.id}</span>
                            )}
                          </div>
                          <div className="text-center">
                            <span className={`text-[10px] font-medium block ${
                              step.status === 'active' ? theme.primaryText : theme.textMuted
                            }`}>
                              {step.name}
                            </span>
                            <span className={`text-[9px] ${theme.textMuted} block`}>{step.date}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setShowVendorDirectory(true)}
                    className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow} ${theme.shadowHover} transition-all text-left`}
                  >
                    <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center mb-4`}>
                      <Users className={`w-6 h-6 ${theme.primaryText}`} />
                    </div>
                    <h3 className={`text-lg font-bold ${theme.textPrimary} mb-2`}>Vendor Directory</h3>
                    <p className={`text-sm ${theme.textMuted}`}>Browse and book trusted service providers</p>
                  </button>

                  <button
                    onClick={() => setShowDocuments(true)}
                    className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow} ${theme.shadowHover} transition-all text-left`}
                  >
                    <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center mb-4`}>
                      <FileText className={`w-6 h-6 ${theme.primaryText}`} />
                    </div>
                    <h3 className={`text-lg font-bold ${theme.textPrimary} mb-2`}>Documents</h3>
                    <p className={`text-sm ${theme.textMuted}`}>View and upload transaction documents</p>
                  </button>

                  <button
                    onClick={() => setActiveView('calendar')}
                    className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow} ${theme.shadowHover} transition-all text-left`}
                  >
                    <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center mb-4`}>
                      <Calendar className={`w-6 h-6 ${theme.primaryText}`} />
                    </div>
                    <h3 className={`text-lg font-bold ${theme.textPrimary} mb-2`}>Calendar</h3>
                    <p className={`text-sm ${theme.textMuted}`}>View upcoming appointments and deadlines</p>
                  </button>

                  <button
                    onClick={() => setActiveView('rewards')}
                    className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow} ${theme.shadowHover} transition-all text-left`}
                  >
                    <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center mb-4`}>
                      <Gift className={`w-6 h-6 ${theme.primaryText}`} />
                    </div>
                    <h3 className={`text-lg font-bold ${theme.textPrimary} mb-2`}>Rewards</h3>
                    <p className={`text-sm ${theme.textMuted}`}>Earn Plot Credits and rewards</p>
                  </button>
                </div>
              </>
            )}

            {/* Milestones View */}
            {activeView === 'milestones' && (
              <div className="space-y-4">
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow}`}>
                  <h2 className={`text-2xl font-bold ${theme.textPrimary} mb-6`}>Transaction Milestones</h2>

                  {steps.map((step) => (
                    <div key={step.id} className={`${theme.border} border-b pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            step.status === 'completed' ? theme.primary + ' text-white' :
                            step.status === 'active' ? theme.primaryLight + ' ' + theme.primaryText :
                            theme.border + ' border ' + theme.textMuted
                          }`}>
                            {step.status === 'completed' ? <Check className="w-6 h-6" /> : step.id}
                          </div>
                          <div>
                            <h3 className={`text-lg font-bold ${theme.textPrimary}`}>{step.name}</h3>
                            <p className={`text-sm ${theme.textMuted}`}>{step.date}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedMilestone(step)
                            setShowMilestoneQuestions(true)
                          }}
                          className={`${theme.primary} ${theme.primaryHover} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors`}
                        >
                          View Checklist
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vendors View */}
            {activeView === 'vendors' && (
              <div className="space-y-4">
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow}`}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>Vendor Directory</h2>
                    <button
                      onClick={() => setShowActiveBids(true)}
                      className={`${theme.primary} ${theme.primaryHover} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2`}
                    >
                      <Eye className="w-4 h-4" />
                      Active Bids ({activeBids.filter(b => b.status === 'pending').length})
                    </button>
                  </div>

                  {/* Category Filter */}
                  <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                    {['all', 'inspector', 'mover', 'cleaner', 'handyman', 'landscaper', 'contractor'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setVendorCategory(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                          vendorCategory === cat
                            ? `${theme.primary} text-white`
                            : `${theme.bgCard} ${theme.border} border ${theme.textMuted} hover:${theme.primaryLight}`
                        }`}
                      >
                        {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
                      </button>
                    ))}
                  </div>

                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme.textMuted}`} />
                    <input
                      type="text"
                      value={searchVendor}
                      onChange={(e) => setSearchVendor(e.target.value)}
                      placeholder="Search vendors..."
                      className={`w-full pl-10 pr-4 py-3 ${theme.bgCard} ${theme.border} border rounded-lg ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                    />
                  </div>

                  {/* Vendors Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredVendors.map((vendor) => (
                      <div key={vendor.id} className={`${theme.border} border rounded-lg p-4 ${theme.shadowHover} transition-all`}>
                        <div className="flex gap-4">
                          <img src={vendor.image} alt={vendor.name} className="w-20 h-20 rounded-lg object-cover" />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className={`font-bold ${theme.textPrimary}`}>{vendor.name}</h3>
                                <p className={`text-xs ${theme.textMuted}`}>{vendor.specialty}</p>
                              </div>
                              <button
                                onClick={() => toggleFavorite(vendor.id)}
                                className="p-1"
                              >
                                <Heart className={`w-5 h-5 ${favoriteVendors.includes(vendor.id) ? 'fill-red-500 text-red-500' : theme.textMuted}`} />
                              </button>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className={`text-sm font-semibold ${theme.textPrimary}`}>{vendor.rating}</span>
                              </div>
                              <span className={`text-xs ${theme.textMuted}`}>({vendor.reviews} reviews)</span>
                              {vendor.certified && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Certified</span>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className={`text-lg font-bold ${theme.primaryText}`}>${vendor.price}</span>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    setSelectedVendor(vendor)
                                    setShowServiceScheduling(true)
                                  }}
                                  className={`${theme.primary} ${theme.primaryHover} text-white px-3 py-1 rounded text-sm font-semibold transition-colors`}
                                >
                                  Book
                                </button>
                                <button
                                  onClick={() => {
                                    setSelectedVendor(vendor)
                                    setShowBidPosting(true)
                                  }}
                                  className={`${theme.border} border ${theme.textPrimary} px-3 py-1 rounded text-sm font-semibold transition-colors hover:${theme.primaryLight}`}
                                >
                                  Request Bid
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Calendar View */}
            {activeView === 'calendar' && (
              <div className="space-y-4">
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow}`}>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                      className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                    >
                      <ChevronLeft className={`w-5 h-5 ${theme.textPrimary}`} />
                    </button>
                    <h2 className={`text-xl font-bold ${theme.textPrimary}`}>{formatMonth(selectedDate)}</h2>
                    <button
                      onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                      className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                    >
                      <ChevronRight className={`w-5 h-5 ${theme.textPrimary}`} />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className={`text-center text-sm font-semibold ${theme.textMuted} py-2`}>
                        {day}
                      </div>
                    ))}

                    {(() => {
                      const { daysInMonth, startingDayOfWeek } = getDaysInMonth(selectedDate)
                      const days = []

                      // Empty cells before month starts
                      for (let i = 0; i < startingDayOfWeek; i++) {
                        days.push(<div key={`empty-${i}`} className="aspect-square" />)
                      }

                      // Days of the month
                      for (let day = 1; day <= daysInMonth; day++) {
                        const dayEvents = getEventsForDate(day)
                        days.push(
                          <button
                            key={day}
                            onClick={() => {
                              if (dayEvents.length > 0) {
                                setSelectedEvent(dayEvents[0])
                              }
                            }}
                            className={`aspect-square p-2 rounded-lg text-sm font-medium transition-all ${
                              dayEvents.length > 0
                                ? `${theme.primary} text-white ${theme.shadowHover}`
                                : `${theme.bgCard} ${theme.textPrimary} hover:${theme.primaryLight}`
                            }`}
                          >
                            <div>{day}</div>
                            {dayEvents.length > 0 && (
                              <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1"></div>
                            )}
                          </button>
                        )
                      }

                      return days
                    })()}
                  </div>

                  {/* Upcoming Events */}
                  <div className="mt-6">
                    <h3 className={`text-lg font-bold ${theme.textPrimary} mb-4`}>Upcoming Events</h3>
                    <div className="space-y-3">
                      {events.map((event) => (
                        <button
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className={`w-full ${theme.border} border rounded-lg p-4 text-left hover:${theme.primaryLight} transition-colors`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className={`font-semibold ${theme.textPrimary}`}>{event.title}</h4>
                              <p className={`text-sm ${theme.textMuted} mt-1`}>{event.date} at {event.time}</p>
                              <p className={`text-sm ${theme.textMuted}`}>{event.location}</p>
                            </div>
                            <span className={`${theme.primaryLight} ${theme.primaryText} px-3 py-1 rounded-full text-xs font-semibold`}>
                              {event.type}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Documents View */}
            {activeView === 'documents' && (
              <div className="space-y-4">
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow}`}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>Transaction Documents</h2>
                    <button className={`${theme.primary} ${theme.primaryHover} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2`}>
                      <Upload className="w-4 h-4" />
                      Upload Document
                    </button>
                  </div>

                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div key={doc.id} className={`${theme.border} border rounded-lg p-4 flex items-center justify-between hover:${theme.primaryLight} transition-colors`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center`}>
                            <FileText className={`w-6 h-6 ${theme.primaryText}`} />
                          </div>
                          <div>
                            <h3 className={`font-semibold ${theme.textPrimary}`}>{doc.name}</h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={`text-xs ${theme.textMuted}`}>{doc.type}</span>
                              <span className={`text-xs ${theme.textMuted}`}>•</span>
                              <span className={`text-xs ${theme.textMuted}`}>{doc.size}</span>
                              <span className={`text-xs ${theme.textMuted}`}>•</span>
                              <span className={`text-xs ${theme.textMuted}`}>Uploaded by {doc.uploadedBy}</span>
                              <span className={`text-xs ${theme.textMuted}`}>•</span>
                              <span className={`text-xs ${theme.textMuted}`}>{doc.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}>
                            <Eye className={`w-5 h-5 ${theme.textMuted}`} />
                          </button>
                          <button className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}>
                            <Download className={`w-5 h-5 ${theme.textMuted}`} />
                          </button>
                          <button className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}>
                            <Share2 className={`w-5 h-5 ${theme.textMuted}`} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Rewards View */}
            {activeView === 'rewards' && (
              <div className="space-y-4">
                {/* Plot Credits Card */}
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-32 -mt-32"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>Plot Credits</h2>
                      <div className={`${theme.primary} ${theme.shadow} p-3 rounded-xl`}>
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className={`text-sm ${theme.textMuted} mb-2`}>Available Balance</p>
                      <p className={`text-5xl font-bold ${theme.primaryText}`}>$150</p>
                      <p className={`text-sm ${theme.textMuted} mt-2`}>Redeem on closing costs or services</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className={`${theme.primaryLight} rounded-lg p-4 text-center`}>
                        <p className={`text-2xl font-bold ${theme.primaryText}`}>3</p>
                        <p className={`text-xs ${theme.textMuted}`}>Referrals</p>
                      </div>
                      <div className={`${theme.primaryLight} rounded-lg p-4 text-center`}>
                        <p className={`text-2xl font-bold ${theme.primaryText}`}>$50</p>
                        <p className={`text-xs ${theme.textMuted}`}>Per Referral</p>
                      </div>
                      <div className={`${theme.primaryLight} rounded-lg p-4 text-center`}>
                        <p className={`text-2xl font-bold ${theme.primaryText}`}>5</p>
                        <p className={`text-xs ${theme.textMuted}`}>Services Used</p>
                      </div>
                    </div>

                    <button className={`w-full ${theme.primary} ${theme.primaryHover} text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}>
                      <Share2 className="w-5 h-5" />
                      Share Referral Link
                    </button>
                  </div>
                </div>

                {/* How to Earn Credits */}
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow}`}>
                  <h3 className={`text-lg font-bold ${theme.textPrimary} mb-4`}>How to Earn Plot Credits</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Users className={`w-6 h-6 ${theme.primaryText}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${theme.textPrimary} mb-1`}>Refer Friends & Family</h4>
                        <p className={`text-sm ${theme.textMuted}`}>Earn $50 in Plot Credits for each successful referral who closes a transaction</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Star className={`w-6 h-6 ${theme.primaryText}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${theme.textPrimary} mb-1`}>Leave Reviews</h4>
                        <p className={`text-sm ${theme.textMuted}`}>Earn $10 in credits for each vendor review you submit</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${theme.primaryLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <TrendingUp className={`w-6 h-6 ${theme.primaryText}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${theme.textPrimary} mb-1`}>Complete Milestones</h4>
                        <p className={`text-sm ${theme.textMuted}`}>Earn bonus credits by completing transaction milestones on time</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Credit History */}
                <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow}`}>
                  <h3 className={`text-lg font-bold ${theme.textPrimary} mb-4`}>Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center`}>
                          <Plus className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className={`font-semibold ${theme.textPrimary}`}>Referral Bonus</p>
                          <p className={`text-xs ${theme.textMuted}`}>John Smith closed on 123 Main St</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-green-600">+$50</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center`}>
                          <Plus className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className={`font-semibold ${theme.textPrimary}`}>Review Bonus</p>
                          <p className={`text-xs ${theme.textMuted}`}>Reviewed Precision Home Inspection</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-green-600">+$10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center`}>
                          <Plus className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className={`font-semibold ${theme.textPrimary}`}>Milestone Bonus</p>
                          <p className={`text-xs ${theme.textMuted}`}>Completed inspection on time</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-green-600">+$25</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-72 space-y-4">
            <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-4 ${theme.shadow}`}>
              <h3 className={`text-lg font-bold ${theme.textPrimary} mb-4 flex items-center gap-2`}>
                <MapPin className={`w-5 h-5 ${theme.primaryText}`} />
                Property Details
              </h3>
              <p className={`${theme.textSecondary} text-sm font-semibold mb-1`}>2847 Olive Avenue</p>
              <p className={`${theme.textMuted} text-sm mb-4`}>Fresno, CA 93728</p>

              <div className={`p-4 ${theme.primaryLight} rounded-lg`}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className={`text-sm ${theme.textMuted}`}>Beds</p>
                    <p className={`text-xl font-bold ${theme.textPrimary}`}>3</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm ${theme.textMuted}`}>Baths</p>
                    <p className={`text-xl font-bold ${theme.textPrimary}`}>2</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm ${theme.textMuted}`}>Sq Ft</p>
                    <p className={`text-xl font-bold ${theme.textPrimary}`}>1,850</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm ${theme.textMuted}`}>Year</p>
                    <p className={`text-xl font-bold ${theme.textPrimary}`}>1995</p>
                  </div>
                </div>
              </div>

              <div className={`mt-4 p-4 ${theme.primary} rounded-lg text-white`}>
                <p className="text-sm mb-1">Purchase Price</p>
                <p className="text-2xl font-bold">$485,000</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-4 ${theme.shadow}`}>
              <h3 className={`text-lg font-bold ${theme.textPrimary} mb-4`}>Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${theme.textMuted}`}>Days to Close</span>
                  <span className={`text-lg font-bold ${theme.primaryText}`}>21</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${theme.textMuted}`}>Services Booked</span>
                  <span className={`text-lg font-bold ${theme.primaryText}`}>5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${theme.textMuted}`}>Plot Credits</span>
                  <span className={`text-lg font-bold ${theme.primaryText}`}>$150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Questions Modal */}
      {showMilestoneQuestions && selectedMilestone && milestoneQuestions[selectedMilestone.id as keyof typeof milestoneQuestions] && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`${theme.bgCard} rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${theme.shadow}`}>
            <div className={`${theme.border} border-b p-6 sticky top-0 ${theme.bgCard}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>
                    {milestoneQuestions[selectedMilestone.id as keyof typeof milestoneQuestions].title}
                  </h2>
                  <p className={`text-sm ${theme.textMuted} mt-1`}>Complete the checklist to track your progress</p>
                </div>
                <button
                  onClick={() => setShowMilestoneQuestions(false)}
                  className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                >
                  <X className={`w-6 h-6 ${theme.textMuted}`} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {milestoneQuestions[selectedMilestone.id as keyof typeof milestoneQuestions].questions.map((q) => (
                <div key={q.id} className={`${theme.border} border rounded-lg p-4`}>
                  <p className={`font-semibold ${theme.textPrimary} mb-3`}>{q.question}</p>
                  {q.type === 'yesno' ? (
                    <div className="flex gap-3">
                      <button className={`flex-1 ${theme.primary} ${theme.primaryHover} text-white py-2 rounded-lg font-semibold transition-colors`}>
                        Yes
                      </button>
                      <button className={`flex-1 ${theme.border} border ${theme.textPrimary} py-2 rounded-lg font-semibold transition-colors hover:${theme.primaryLight}`}>
                        No
                      </button>
                    </div>
                  ) : (
                    <textarea
                      className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                      rows={3}
                      placeholder="Enter your response..."
                    />
                  )}
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowMilestoneQuestions(false)}
                  className={`flex-1 ${theme.border} border ${theme.textPrimary} py-3 rounded-lg font-semibold transition-colors hover:${theme.primaryLight}`}
                >
                  Save for Later
                </button>
                <button
                  onClick={() => setShowMilestoneQuestions(false)}
                  className={`flex-1 ${theme.primary} ${theme.primaryHover} text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                >
                  <Check className="w-5 h-5" />
                  Complete Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Scheduling Modal */}
      {showServiceScheduling && selectedVendor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`${theme.bgCard} rounded-2xl w-full max-w-lg ${theme.shadow}`}>
            <div className={`${theme.border} border-b p-6`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>Schedule Service</h2>
                <button
                  onClick={() => setShowServiceScheduling(false)}
                  className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                >
                  <X className={`w-6 h-6 ${theme.textMuted}`} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <img src={selectedVendor.image} alt={selectedVendor.name} className="w-20 h-20 rounded-lg object-cover" />
                <div>
                  <h3 className={`font-bold ${theme.textPrimary}`}>{selectedVendor.name}</h3>
                  <p className={`text-sm ${theme.textMuted}`}>{selectedVendor.specialty}</p>
                  <p className={`text-lg font-bold ${theme.primaryText} mt-1`}>${selectedVendor.price}</p>
                </div>
              </div>

              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Select Date</label>
                <input
                  type="date"
                  className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                />
              </div>

              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Select Time</label>
                <select className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                </select>
              </div>

              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Additional Notes</label>
                <textarea
                  className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                  rows={3}
                  placeholder="Any special requests or requirements..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowServiceScheduling(false)}
                  className={`flex-1 ${theme.border} border ${theme.textPrimary} py-3 rounded-lg font-semibold transition-colors hover:${theme.primaryLight}`}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowServiceScheduling(false)}
                  className={`flex-1 ${theme.primary} ${theme.primaryHover} text-white py-3 rounded-lg font-semibold transition-colors`}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bid Posting Modal */}
      {showBidPosting && selectedVendor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`${theme.bgCard} rounded-2xl w-full max-w-lg ${theme.shadow}`}>
            <div className={`${theme.border} border-b p-6`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>Request Bid</h2>
                <button
                  onClick={() => setShowBidPosting(false)}
                  className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                >
                  <X className={`w-6 h-6 ${theme.textMuted}`} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Service Type</label>
                <input
                  type="text"
                  value={selectedVendor.specialty}
                  readOnly
                  className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none`}
                />
              </div>

              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Project Description</label>
                <textarea
                  className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                  rows={4}
                  placeholder="Describe what you need..."
                />
              </div>

              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Preferred Timeline</label>
                <select className={`w-full ${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}>
                  <option>ASAP</option>
                  <option>Within 1 week</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div>
                <label className={`text-sm font-semibold ${theme.textPrimary} block mb-2`}>Budget Range</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    className={`${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className={`${theme.bgCard} ${theme.border} border rounded-lg p-3 ${theme.textPrimary} focus:outline-none focus:border-blue-500`}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowBidPosting(false)}
                  className={`flex-1 ${theme.border} border ${theme.textPrimary} py-3 rounded-lg font-semibold transition-colors hover:${theme.primaryLight}`}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowBidPosting(false)}
                  className={`flex-1 ${theme.primary} ${theme.primaryHover} text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                >
                  <Send className="w-5 h-5" />
                  Request Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Bids Modal */}
      {showActiveBids && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`${theme.bgCard} rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${theme.shadow}`}>
            <div className={`${theme.border} border-b p-6 sticky top-0 ${theme.bgCard}`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${theme.textPrimary}`}>Active Bids</h2>
                <button
                  onClick={() => setShowActiveBids(false)}
                  className={`p-2 hover:${theme.primaryLight} rounded-lg transition-colors`}
                >
                  <X className={`w-6 h-6 ${theme.textMuted}`} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {activeBids.map((bid) => (
                <div key={bid.id} className={`${theme.border} border rounded-lg p-4`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className={`font-bold ${theme.textPrimary}`}>{bid.service}</h3>
                      <p className={`text-sm ${theme.textMuted}`}>{bid.vendor}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      bid.status === 'accepted'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {bid.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-2xl font-bold ${theme.primaryText}`}>${bid.amount}</p>
                      <p className={`text-xs ${theme.textMuted}`}>Submitted {bid.submittedAt}</p>
                    </div>
                    {bid.status === 'pending' && (
                      <div className="flex gap-2">
                        <button className={`${theme.primary} ${theme.primaryHover} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1`}>
                          <ThumbsUp className="w-4 h-4" />
                          Accept
                        </button>
                        <button className={`${theme.border} border ${theme.textPrimary} px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:${theme.primaryLight}`}>
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-full shadow-2xl shadow-sky-500/50 flex items-center justify-center transition-all transform hover:scale-110 z-50"
      >
        {showChat ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <>
            <MessageSquare className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white animate-pulse">
              3
            </span>
          </>
        )}
      </button>

      {/* Chat Interface */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between bg-gradient-to-r from-sky-500/10 to-blue-600/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <p className="font-semibold text-white">Greg (AI Assistant)</p>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <Phone className="w-4 h-4 text-sky-400" />
              </button>
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <Mic className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl rounded-tr-none shadow-lg'
                    : 'bg-slate-700 rounded-2xl rounded-tl-none'
                } p-3`}>
                  <p className="text-white text-sm">{msg.text}</p>
                  <p className="text-xs text-gray-300 mt-1 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type or use voice..."
                className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-sky-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors shadow-lg shadow-sky-500/30"
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
