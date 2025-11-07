'use client'

import React, { useState } from 'react'
import {
  Home, Users, TrendingUp, DollarSign, Calendar, MessageSquare, Phone,
  Bell, Settings, Search, Plus, Filter, ChevronRight, ChevronDown,
  Clock, Check, AlertCircle, Star, Eye, Edit, Send, Mic, Video,
  FileText, Award, Package, Briefcase, MapPin, Mail, PhoneCall, X
} from 'lucide-react'
import Link from 'next/link'

export default function AgentDashboard() {
  const [activeView, setActiveView] = useState('overview')
  const [showGreg, setShowGreg] = useState(false)
  const [showRiley, setShowRiley] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock Data
  const stats = {
    activeClients: 24,
    pendingDeals: 8,
    closingsThisMonth: 3,
    vendorEarnings: 4250,
    totalVolume: 3850000
  }

  const clients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      property: '2847 Olive Ave, Fresno CA',
      stage: 'inspection',
      price: 485000,
      daysActive: 12,
      nextAction: 'Schedule inspection',
      phone: '(559) 555-0123',
      email: 'sarah.j@email.com'
    },
    {
      id: 2,
      name: 'Michael Chen',
      property: '1234 Maple St, Clovis CA',
      stage: 'offer',
      price: 625000,
      daysActive: 3,
      nextAction: 'Review counter-offer',
      phone: '(559) 555-0124',
      email: 'mchen@email.com'
    },
    {
      id: 3,
      name: 'Emma Williams',
      property: '5678 Oak Blvd, Fresno CA',
      stage: 'closing',
      price: 395000,
      daysActive: 28,
      nextAction: 'Final walkthrough',
      phone: '(559) 555-0125',
      email: 'emma.w@email.com'
    },
    {
      id: 4,
      name: 'David Martinez',
      property: '9012 Pine Rd, Clovis CA',
      stage: 'appraisal',
      price: 550000,
      daysActive: 18,
      nextAction: 'Wait for appraisal',
      phone: '(559) 555-0126',
      email: 'dmartinez@email.com'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      property: '3456 Cedar Ln, Fresno CA',
      stage: 'listing',
      price: 425000,
      daysActive: 7,
      nextAction: 'Open house prep',
      phone: '(559) 555-0127',
      email: 'lisa.a@email.com'
    }
  ]

  const recentCalls = [
    { id: 1, name: 'John Parker', type: 'incoming', duration: '5:23', time: '10 mins ago', status: 'completed', topic: 'Listing inquiry' },
    { id: 2, name: 'Amy Roberts', type: 'missed', duration: '-', time: '1 hour ago', status: 'missed', topic: 'Callback needed' },
    { id: 3, name: 'Tom Wilson', type: 'outgoing', duration: '12:45', time: '2 hours ago', status: 'completed', topic: 'Follow-up' }
  ]

  const vendorEarnings = [
    { id: 1, vendor: 'Precision Home Inspection', client: 'Sarah Johnson', amount: 450, date: '2025-10-28', status: 'paid' },
    { id: 2, vendor: 'Swift Move Pros', client: 'Robert Davis', amount: 850, date: '2025-10-25', status: 'paid' },
    { id: 3, vendor: 'Sparkle Clean Services', client: 'Emma Williams', amount: 250, date: '2025-10-30', status: 'pending' },
    { id: 4, vendor: 'Green Thumb Landscaping', client: 'Michael Chen', amount: 500, date: '2025-10-29', status: 'pending' }
  ]

  const upcomingEvents = [
    { id: 1, title: 'Property Showing', client: 'Sarah Johnson', time: 'Today, 2:00 PM', location: '2847 Olive Ave' },
    { id: 2, title: 'Closing Meeting', client: 'Emma Williams', time: 'Tomorrow, 9:00 AM', location: 'Title Office' },
    { id: 3, title: 'Open House', client: 'Lisa Anderson', time: 'Saturday, 1:00 PM', location: '3456 Cedar Ln' }
  ]

  const [gregMessages, setGregMessages] = useState([
    { sender: 'assistant', text: "Hey! I'm Greg, your AI broker assistant. I see you have 3 clients needing attention today. Want me to prioritize them?", timestamp: '10:30 AM' },
    { sender: 'user', text: "Yes, show me the priority list", timestamp: '10:32 AM' },
    { sender: 'assistant', text: "Based on urgency:\n1. Sarah Johnson - Inspection in 2 days\n2. Michael Chen - Counter-offer response due today\n3. Emma Williams - Final walkthrough tomorrow\n\nWould you like me to send reminders?", timestamp: '10:33 AM' }
  ])

  const stageColors: Record<string, string> = {
    listing: 'bg-gray-100 text-gray-700',
    offer: 'bg-blue-100 text-blue-700',
    inspection: 'bg-yellow-100 text-yellow-700',
    appraisal: 'bg-purple-100 text-purple-700',
    closing: 'bg-green-100 text-green-700'
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setGregMessages([...gregMessages, {
        sender: 'user',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setNewMessage('')

      setTimeout(() => {
        setGregMessages(prev => [...prev, {
          sender: 'assistant',
          text: "I'm analyzing that request. Let me help you with that right away!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Plot</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Agent Dashboard</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clients, properties..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="relative p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  3
                </span>
              </button>

              <button className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GA</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto">
            {['overview', 'clients', 'pipeline', 'earnings', 'calendar'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                  activeView === view
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content */}
          <div className="flex-1 space-y-4">

            {/* Overview */}
            {activeView === 'overview' && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Active Clients</p>
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.activeClients}</p>
                    <p className="text-xs text-green-600 mt-1">↑ 12% this month</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Pending Deals</p>
                      <FileText className="w-5 h-5 text-yellow-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.pendingDeals}</p>
                    <p className="text-xs text-blue-600 mt-1">3 closing soon</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Closings MTD</p>
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{stats.closingsThisMonth}</p>
                    <p className="text-xs text-gray-600 mt-1">$1.2M volume</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Vendor Earnings</p>
                      <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">${(stats.vendorEarnings / 1000).toFixed(1)}k</p>
                    <p className="text-xs text-green-600 mt-1">↑ $850 this week</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Total Volume</p>
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">${(stats.totalVolume / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-green-600 mt-1">YTD pipeline</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all">
                      <Plus className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Add Client</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all">
                      <Home className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">New Listing</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Schedule</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Documents</span>
                    </button>
                  </div>
                </div>

                {/* Recent Clients */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Recent Clients</h2>
                    <button
                      onClick={() => setActiveView('clients')}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {clients.slice(0, 3).map((client) => (
                      <div key={client.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{client.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{client.name}</h3>
                            <p className="text-sm text-gray-600">{client.property}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${stageColors[client.stage]}`}>
                            {client.stage}
                          </span>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Clients View */}
            {activeView === 'clients' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">All Clients</h2>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Plus className="w-4 h-4" />
                      Add Client
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {clients.map((client) => (
                    <div key={client.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{client.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {client.property}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs text-gray-600 flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {client.email}
                              </span>
                              <span className="text-xs text-gray-600 flex items-center gap-1">
                                <PhoneCall className="w-3 h-3" />
                                {client.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${stageColors[client.stage]}`}>
                          {client.stage}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Purchase Price</p>
                          <p className="text-lg font-bold text-gray-900">${(client.price / 1000).toFixed(0)}k</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Days Active</p>
                          <p className="text-lg font-bold text-gray-900">{client.daysActive}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Next Action</p>
                          <p className="text-sm font-semibold text-blue-600">{client.nextAction}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={`/portal/client-${client.id}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View Portal
                        </Link>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          Message
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                          <Phone className="w-4 h-4" />
                          Call
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pipeline View */}
            {activeView === 'pipeline' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Deal Pipeline</h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {['listing', 'offer', 'inspection', 'appraisal', 'closing'].map((stage) => {
                    const stageClients = clients.filter(c => c.stage === stage)
                    const stageValue = stageClients.reduce((sum, c) => sum + c.price, 0)

                    return (
                      <div key={stage} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-gray-900 capitalize">{stage}</h3>
                          <span className="text-sm font-semibold text-gray-600">{stageClients.length}</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-4">${(stageValue / 1000).toFixed(0)}k total</p>

                        <div className="space-y-2">
                          {stageClients.map((client) => (
                            <div key={client.id} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                              <p className="font-semibold text-sm text-gray-900">{client.name}</p>
                              <p className="text-xs text-gray-600 mt-1">${(client.price / 1000).toFixed(0)}k</p>
                              <p className="text-xs text-gray-500 mt-1">{client.daysActive} days</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Earnings View */}
            {activeView === 'earnings' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Vendor Earnings</h2>
                    <p className="text-sm text-gray-600 mt-1">Commission from vendor referrals</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">${(stats.vendorEarnings / 1000).toFixed(2)}k</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {vendorEarnings.map((earning) => (
                    <div key={earning.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{earning.vendor}</h3>
                          <p className="text-sm text-gray-600">Client: {earning.client}</p>
                          <p className="text-xs text-gray-500">{earning.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${earning.amount}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                          earning.status === 'paid'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {earning.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calendar View */}
            {activeView === 'calendar' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>

                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">Client: {event.client}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-gray-600 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </span>
                          <span className="text-xs text-gray-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-80 space-y-4">
            {/* Riley Call Stats */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Riley Call Stats</h3>
                <button
                  onClick={() => setShowRiley(true)}
                  className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 text-green-600" />
                </button>
              </div>

              <div className="space-y-3">
                {recentCalls.map((call) => (
                  <div key={call.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      call.type === 'incoming' ? 'bg-blue-100' :
                      call.type === 'outgoing' ? 'bg-green-100' :
                      'bg-red-100'
                    }`}>
                      <Phone className={`w-5 h-5 ${
                        call.type === 'incoming' ? 'text-blue-600' :
                        call.type === 'outgoing' ? 'text-green-600' :
                        'text-red-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">{call.name}</p>
                      <p className="text-xs text-gray-600">{call.topic}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{call.time}</span>
                        {call.duration !== '-' && (
                          <>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">{call.duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowRiley(true)}
                className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
              >
                View All Calls
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Schedule</h3>
              <div className="space-y-3">
                {upcomingEvents.slice(0, 2).map((event) => (
                  <div key={event.id} className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-sm text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{event.client}</p>
                    <p className="text-xs text-blue-600 mt-1">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Greg AI Chat Button */}
      <button
        onClick={() => setShowGreg(!showGreg)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center transition-all transform hover:scale-110 z-50"
      >
        {showGreg ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <>
            <MessageSquare className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white animate-pulse">
              AI
            </span>
          </>
        )}
      </button>

      {/* Greg AI Chat Interface */}
      {showGreg && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white border-2 border-blue-300 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold">G</span>
              </div>
              <div>
                <p className="font-semibold text-white">Greg (AI Broker)</p>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online & Ready
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
            {gregMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none'
                    : 'bg-white border border-gray-200 rounded-2xl rounded-tl-none'
                } p-3 shadow-sm`}>
                  <p className={`text-sm whitespace-pre-line ${msg.sender === 'user' ? 'text-white' : 'text-gray-900'}`}>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Greg anything..."
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Riley Modal */}
      {showRiley && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="border-b p-6 bg-gradient-to-r from-green-500 to-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Riley (Voice AI)</h2>
                    <p className="text-sm text-green-100">24/7 Call Management</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRiley(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">All Call History</h3>
              <div className="space-y-3">
                {recentCalls.map((call) => (
                  <div key={call.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          call.type === 'incoming' ? 'bg-blue-100' :
                          call.type === 'outgoing' ? 'bg-green-100' :
                          'bg-red-100'
                        }`}>
                          <Phone className={`w-5 h-5 ${
                            call.type === 'incoming' ? 'text-blue-600' :
                            call.type === 'outgoing' ? 'text-green-600' :
                            'text-red-600'
                          }`} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{call.name}</p>
                          <p className="text-sm text-gray-600">{call.topic}</p>
                          <p className="text-xs text-gray-500 mt-1">{call.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          call.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {call.status}
                        </span>
                        {call.duration !== '-' && (
                          <p className="text-sm text-gray-600 mt-2">{call.duration}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
