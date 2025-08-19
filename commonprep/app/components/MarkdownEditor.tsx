'use client'

import { useState, useRef, useEffect } from 'react'
import { Bold, Italic, List, ListOrdered, Quote, Code, Eye, Edit, Save } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'

interface MarkdownEditorProps {
  initialContent?: string
  onSave?: (content: string) => void
  placeholder?: string
}

export default function MarkdownEditor({ 
  initialContent = '', 
  onSave,
  placeholder = 'Start taking notes...'
}: MarkdownEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [isPreview, setIsPreview] = useState(false)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setHasUnsavedChanges(content !== initialContent)
  }, [content, initialContent])

  const insertMarkdown = (before: string, after: string = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    
    const newText = content.substring(0, start) + before + selectedText + after + content.substring(end)
    setContent(newText)
    
    // Focus and set cursor position
    setTimeout(() => {
      textarea.focus()
      const newPosition = start + before.length + selectedText.length + after.length
      textarea.setSelectionRange(newPosition, newPosition)
    }, 0)
  }

  const handleSave = () => {
    if (onSave) {
      onSave(content)
      setHasUnsavedChanges(false)
    }
  }

  const toolbarButtons = [
    { icon: Bold, action: () => insertMarkdown('**', '**'), tooltip: 'Bold' },
    { icon: Italic, action: () => insertMarkdown('*', '*'), tooltip: 'Italic' },
    { icon: List, action: () => insertMarkdown('\n- '), tooltip: 'Bullet List' },
    { icon: ListOrdered, action: () => insertMarkdown('\n1. '), tooltip: 'Numbered List' },
    { icon: Quote, action: () => insertMarkdown('\n> '), tooltip: 'Quote' },
    { icon: Code, action: () => insertMarkdown('`', '`'), tooltip: 'Inline Code' },
  ]

  return (
    <div className="h-full flex flex-col bg-white/5 rounded-xl border border-white/10 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
        <div className="flex items-center space-x-2">
          {toolbarButtons.map((button, index) => (
            <button
              key={index}
              onClick={button.action}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
              title={button.tooltip}
            >
              <button.icon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPreview(!isPreview)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
              isPreview 
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                : 'bg-white/10 text-zinc-300 hover:bg-white/20'
            }`}
          >
            {isPreview ? <Edit className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{isPreview ? 'Edit' : 'Preview'}</span>
          </button>
          
          {hasUnsavedChanges && onSave && (
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg transition-colors hover:bg-green-500/30 text-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex">
        {isPreview ? (
          <div className="flex-1 p-6 overflow-y-auto">
            {content.trim() ? (
              <MarkdownRenderer 
                content={content}
                className="prose prose-invert prose-zinc max-w-none"
              />
            ) : (
              <div className="text-center py-12">
                <div className="text-zinc-400 mb-2">Nothing to preview</div>
                <div className="text-zinc-500 text-sm">Start writing to see your content rendered</div>
              </div>
            )}
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            className="flex-1 p-6 bg-transparent text-white resize-none focus:outline-none font-mono text-sm leading-relaxed"
            style={{ minHeight: '400px' }}
          />
        )}
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-t border-white/10 text-xs text-zinc-400">
        <div className="flex items-center space-x-4">
          <span>{content.length} characters</span>
          <span>{content.split('\n').length} lines</span>
        </div>
        {hasUnsavedChanges && (
          <span className="text-amber-400">Unsaved changes</span>
        )}
      </div>
    </div>
  )
}

