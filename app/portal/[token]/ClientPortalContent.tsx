'use client'

import React, { useState } from 'react'
import {
  Calendar, Upload, Camera, Video, MessageSquare, Mic, Bell,
  ChevronRight, Check, Clock, DollarSign, MapPin, Award, Sparkles,
  Home, Star, TrendingUp, FileText, Download, Share2, Heart, ExternalLink,
  ChevronDown, X, Menu, Phone
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

  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', text: "Hey! Ready to schedule that home inspection? I've got three great inspectors available this week.", timestamp: '10:30 AM' },
    { sender: 'user', text: "Yes, let's do it! What times are available?", timestamp: '10:32 AM' },
    { sender: 'assistant', text: "Perfect! I can get you in Tuesday at 10am or Thursday at 2pm. Which works better?", timestamp: '10:33 AM' }
  ])

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

  const unreadNotificationsCount = notifications.filter(n => n.unread).length

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content Area */}
          <div className="flex-1 space-y-4">

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
                  <button className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2">
                    Schedule Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg font-semibold transition-all border border-white/30">
                    View Details
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
                      onClick={() => setActiveStep(step.id)}
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

            {/* Portal Token Display */}
            <div className={`${theme.bgCard} ${theme.border} border rounded-xl p-6 ${theme.shadow} text-center`}>
              <p className={`${theme.textMuted} text-sm mb-2`}>Welcome to your Plot Client Portal</p>
              <p className={`${theme.textPrimary} text-sm`}>Portal Access Token: <code className="text-xs bg-gray-100 px-2 py-1 rounded">{token}</code></p>
              <p className={`${theme.textMuted} text-xs mt-4`}>More features being integrated...</p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-72">
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
          </div>
        </div>
      </div>

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
