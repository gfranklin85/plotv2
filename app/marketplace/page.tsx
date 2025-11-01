'use client'

import React, { useState } from 'react'
import {
  Home, DollarSign, Star, TrendingUp, Package, Briefcase, Award,
  Bell, Settings, Search, Filter, ChevronRight, Eye, Send, Clock,
  MapPin, Calendar, Users, FileText, ChevronDown, ThumbsUp, MessageSquare, X
} from 'lucide-react'
import Link from 'next/link'

export default function VendorMarketplace() {
  const [activeView, setActiveView] = useState('opportunities')
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [showBidModal, setShowBidModal] = useState(false)

  // Mock Data
  const stats = {
    activeBids: 8,
    wonBids: 24,
    totalEarnings: 18750,
    rating: 4.9,
    reviews: 156
  }

  const opportunities = [
    {
      id: 1,
      title: 'Home Inspection Needed',
      client: 'Sarah Johnson (via Agent: Greg Franklin)',
      property: '2847 Olive Ave, Fresno CA',
      category: 'inspection',
      budget: { min: 400, max: 500 },
      timeline: 'Within 3 days',
      description: '3 bed, 2 bath home built in 1995. Client needs full property inspection including roof, foundation, HVAC, plumbing, and electrical systems.',
      postedAt: '2 hours ago',
      bidsCount: 3,
      preferred: true
    },
    {
      id: 2,
      title: 'Moving Service - Local',
      client: 'Michael Chen (via Agent: Greg Franklin)',
      property: '1234 Maple St, Clovis CA',
      category: 'mover',
      budget: { min: 750, max: 900 },
      timeline: 'Nov 15-16',
      description: '2 bedroom apartment move, approximately 1,200 sq ft. Need packing services, loading, transport (15 miles), and unloading.',
      postedAt: '5 hours ago',
      bidsCount: 7,
      preferred: false
    },
    {
      id: 3,
      title: 'Deep Cleaning Service',
      client: 'Emma Williams (via Agent: Greg Franklin)',
      property: '5678 Oak Blvd, Fresno CA',
      category: 'cleaner',
      budget: { min: 200, max: 300 },
      timeline: 'Nov 20',
      description: 'Post-move-out deep cleaning. 3 bed, 2 bath home (1,850 sq ft). Kitchen, bathrooms, all floors, windows, and appliances.',
      postedAt: '1 day ago',
      bidsCount: 12,
      preferred: false
    },
    {
      id: 4,
      title: 'Landscaping & Lawn Care',
      client: 'David Martinez (via Agent: Greg Franklin)',
      property: '9012 Pine Rd, Clovis CA',
      category: 'landscaper',
      budget: { min: 400, max: 600 },
      timeline: 'Before closing (Nov 10)',
      description: 'Front and backyard cleanup, lawn mowing, hedge trimming, weed removal, and general property beautification for showing.',
      postedAt: '3 hours ago',
      bidsCount: 5,
      preferred: true
    },
    {
      id: 5,
      title: 'General Handyman Repairs',
      client: 'Lisa Anderson (via Agent: Greg Franklin)',
      property: '3456 Cedar Ln, Fresno CA',
      category: 'handyman',
      budget: { min: 300, max: 450 },
      timeline: 'ASAP',
      description: 'Pre-listing repairs: fix leaky faucet, patch drywall holes, touch-up paint in 3 rooms, replace door handle.',
      postedAt: '4 hours ago',
      bidsCount: 8,
      preferred: false
    }
  ]

  const myBids = [
    {
      id: 1,
      jobTitle: 'Home Inspection Needed',
      client: 'Sarah Johnson',
      amount: 450,
      status: 'pending',
      submittedAt: '2 hours ago',
      property: '2847 Olive Ave, Fresno CA'
    },
    {
      id: 2,
      jobTitle: 'Property Inspection - Pre-Listing',
      client: 'Robert Davis',
      amount: 425,
      status: 'won',
      submittedAt: '2 days ago',
      property: '7890 Elm St, Clovis CA'
    },
    {
      id: 3,
      jobTitle: 'Full Property Inspection',
      client: 'Amanda Lee',
      amount: 475,
      status: 'declined',
      submittedAt: '3 days ago',
      property: '2345 Birch Ave, Fresno CA'
    }
  ]

  const earnings = [
    { id: 1, jobTitle: 'Home Inspection', client: 'Sarah Johnson', amount: 450, date: '2025-10-28', status: 'paid' },
    { id: 2, jobTitle: 'Property Inspection', client: 'Robert Davis', amount: 425, date: '2025-10-25', status: 'paid' },
    { id: 3, jobTitle: 'Pre-Listing Inspection', client: 'Emma Williams', amount: 400, date: '2025-10-20', status: 'paid' },
    { id: 4, jobTitle: 'Inspection Service', client: 'Michael Chen', amount: 475, date: '2025-10-15', status: 'paid' }
  ]

  const reviews = [
    {
      id: 1,
      client: 'Sarah Johnson',
      agent: 'Greg Franklin',
      rating: 5,
      comment: 'Extremely thorough inspection! Found issues we never would have caught. Highly recommend.',
      date: '2025-10-28',
      job: 'Home Inspection'
    },
    {
      id: 2,
      client: 'Robert Davis',
      agent: 'Greg Franklin',
      rating: 5,
      comment: 'Professional and detailed report. Great communication throughout the process.',
      date: '2025-10-25',
      job: 'Property Inspection'
    },
    {
      id: 3,
      client: 'Emma Williams',
      agent: 'Greg Franklin',
      rating: 4,
      comment: 'Good inspection, very knowledgeable. Report could have been more detailed in some areas.',
      date: '2025-10-20',
      job: 'Pre-Listing Inspection'
    }
  ]

  const categoryIcons: Record<string, any> = {
    inspection: Home,
    mover: Package,
    cleaner: Award,
    landscaper: Award,
    handyman: Briefcase,
    contractor: Briefcase
  }

  const categoryColors: Record<string, string> = {
    inspection: 'bg-blue-100 text-blue-700',
    mover: 'bg-purple-100 text-purple-700',
    cleaner: 'bg-green-100 text-green-700',
    landscaper: 'bg-yellow-100 text-yellow-700',
    handyman: 'bg-orange-100 text-orange-700',
    contractor: 'bg-red-100 text-red-700'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Plot</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Vendor Marketplace</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="relative p-2 hover:bg-purple-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  5
                </span>
              </button>

              <button className="flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PI</span>
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
            {['opportunities', 'my-bids', 'earnings', 'reviews', 'profile'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                  activeView === view
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {view.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content */}
          <div className="flex-1 space-y-4">

            {/* Opportunities View */}
            {activeView === 'opportunities' && (
              <>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Available Opportunities</h2>
                      <p className="text-sm text-gray-600 mt-1">{opportunities.length} jobs available</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>

                  <div className="space-y-4">
                    {opportunities.map((job) => {
                      const Icon = categoryIcons[job.category] || Briefcase
                      return (
                        <div key={job.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 ${categoryColors[job.category]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                                  {job.preferred && (
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                                      Preferred
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{job.client}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {job.property}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {job.timeline}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {job.bidsCount} bids
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-purple-600">
                                ${job.budget.min}-${job.budget.max}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">{job.postedAt}</p>
                            </div>
                          </div>

                          <p className="text-sm text-gray-700 mb-4">{job.description}</p>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setSelectedJob(job)
                                setShowBidModal(true)
                              }}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                            >
                              <Send className="w-4 h-4" />
                              Submit Bid
                            </button>
                            <button
                              onClick={() => setSelectedJob(job)}
                              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                              View Details
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            )}

            {/* My Bids View */}
            {activeView === 'my-bids' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Bids</h2>

                <div className="space-y-4">
                  {myBids.map((bid) => (
                    <div key={bid.id} className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{bid.jobTitle}</h3>
                          <p className="text-sm text-gray-600">Client: {bid.client}</p>
                          <p className="text-xs text-gray-500 mt-1">{bid.property}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          bid.status === 'won' ? 'bg-green-100 text-green-700' :
                          bid.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {bid.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-purple-600">${bid.amount}</p>
                          <p className="text-xs text-gray-500 mt-1">Submitted {bid.submittedAt}</p>
                        </div>
                        {bid.status === 'won' && (
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                            View Job Details
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Earnings View */}
            {activeView === 'earnings' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Earnings History</h2>
                    <p className="text-sm text-gray-600 mt-1">Track your payments</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">${(stats.totalEarnings / 1000).toFixed(1)}k</p>
                    <p className="text-sm text-gray-600">Total Earned</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {earnings.map((earning) => (
                    <div key={earning.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{earning.jobTitle}</h3>
                          <p className="text-sm text-gray-600">Client: {earning.client}</p>
                          <p className="text-xs text-gray-500">{earning.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${earning.amount}</p>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 bg-green-100 text-green-700">
                          {earning.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews View */}
            {activeView === 'reviews' && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Client Reviews</h2>
                    <p className="text-sm text-gray-600 mt-1">{reviews.length} total reviews</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-gray-900">{stats.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900">{review.client}</h3>
                          <p className="text-sm text-gray-600">via {review.agent}</p>
                          <p className="text-xs text-gray-500 mt-1">{review.job}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile View */}
            {activeView === 'profile' && (
              <div className="space-y-4">
                {/* Profile Info */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      PI
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900">Precision Home Inspection</h2>
                      <p className="text-gray-600 mt-1">Full Property Inspection Specialist</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-gray-900">{stats.rating}</span>
                          <span className="text-sm text-gray-600">({stats.reviews} reviews)</span>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Certified
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Business Details */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Business Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">Business Name</label>
                      <input
                        type="text"
                        defaultValue="Precision Home Inspection"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">License Number</label>
                      <input
                        type="text"
                        defaultValue="CA-12345678"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="(559) 555-1234"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="contact@precisionhi.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-80 space-y-4">
            {/* Stats Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm text-gray-700">Active Bids</span>
                  <span className="text-xl font-bold text-purple-600">{stats.activeBids}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Won Bids</span>
                  <span className="text-xl font-bold text-green-600">{stats.wonBids}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-700">Total Earnings</span>
                  <span className="text-xl font-bold text-blue-600">${(stats.totalEarnings / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tips to Win More Bids</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Be Competitive</p>
                    <p className="text-xs text-gray-600">Price within budget range</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Respond Quickly</p>
                    <p className="text-xs text-gray-600">Submit bids within 24hrs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Maintain Quality</p>
                    <p className="text-xs text-gray-600">High ratings win more jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bid Submission Modal */}
      {showBidModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            <div className="border-b p-6 bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Submit Bid</h2>
                  <p className="text-sm text-purple-100 mt-1">{selectedJob.title}</p>
                </div>
                <button
                  onClick={() => setShowBidModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Your Bid Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">$</span>
                  <input
                    type="number"
                    placeholder={`${selectedJob.budget.min}-${selectedJob.budget.max}`}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Budget range: ${selectedJob.budget.min}-${selectedJob.budget.max}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Estimated Timeline</label>
                <input
                  type="text"
                  placeholder="e.g., Within 2 days"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Cover Letter</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  rows={4}
                  placeholder="Explain why you're the best fit for this job..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowBidModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowBidModal(false)}
                  className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
