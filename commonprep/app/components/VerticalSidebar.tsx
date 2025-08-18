'use client'

import Link from 'next/link'
import { useSidebar } from './SidebarContext'
import { 
  Home, 
  Search, 
  Inbox, 
  FileText, 
  Plus, 
  Users, 
  Settings, 
  Trash2, 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Calendar
} from 'lucide-react'

const VerticalSidebar = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar()

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="h-full bg-gray-900 border-r border-gray-700 flex flex-col">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <span className="text-white font-medium">CommonPrep</span>
              </div>
            )}
            <button
              onClick={toggleSidebar}
              className="p-1 rounded hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-3">
            
            {/* Search */}
            <div className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <Search className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Search</span>}
            </div>

            {/* Home */}
            <Link href="/" className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <Home className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Home</span>}
            </Link>

            {/* Programs */}
            <div className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <BookOpen className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Programs</span>}
            </div>

            {/* Schedule */}
            <div className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <Calendar className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Schedule</span>}
            </div>

            {/* Inbox */}
            <div className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <Inbox className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Inbox</span>}
            </div>
          </div>

          {/* Private Section */}
          {!isCollapsed && (
            <div className="mt-6">
              <div className="px-3 mb-2">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Private</h3>
              </div>
              <div className="space-y-1 px-3">
                <div className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Notes</span>
                </div>
                <div className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Study Guide</span>
                </div>
                <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors">
                  <div className="flex items-center space-x-3">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">Add new</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Shared Section */}
          {!isCollapsed && (
            <div className="mt-6">
              <div className="px-3 mb-2">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Shared</h3>
              </div>
              <div className="space-y-1 px-3">
                <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors">
                  <div className="flex items-center space-x-3">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">Start collaborating</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 p-3">
          <div className="space-y-1">
            <div className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <Settings className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Settings</span>}
            </div>
            <div className={`flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              <Trash2 className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Trash</span>}
            </div>
          </div>

          {/* User Section */}
          {!isCollapsed && (
            <div className="mt-3 pt-3 border-t border-gray-700">
              <div className="flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
                <span className="text-sm">Invite members</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 

export default VerticalSidebar