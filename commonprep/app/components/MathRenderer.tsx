'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
  inline?: boolean;
}

// Pattern to detect mathematical expressions that should be rendered with KaTeX
const MATH_PATTERNS = [
  // LaTeX-style expressions
  /\$\$([^$]+)\$\$/g, // Block math: $$...$$
  /\$([^$]+)\$/g, // Inline math: $...$
  
  // Common mathematical notations
  /([a-zA-Z])\^([a-zA-Z0-9\-\+]+)/g, // Exponents: a^2, i^2, etc.
  /([a-zA-Z0-9]+)_([a-zA-Z0-9\-\+]+)/g, // Subscripts: x_1, a_n, etc.
  /([a-zA-Z])\s*×\s*10\^([a-zA-Z0-9\-\+]+)/g, // Scientific notation: a × 10^k
  /([a-zA-Z])\s*≤\s*([a-zA-Z])\s*<\s*([a-zA-Z0-9]+)/g, // Inequalities: 1 ≤ a < 10
  /([a-zA-Z])\s*∈\s*([ℤℚℝℕ]+)/g, // Set membership: k ∈ ℤ
  /([a-zA-Z])\s*=\s*([a-zA-Z])\s*\+\s*([a-zA-Z])i/g, // Complex form: z = a + bi
  /sin\s*([a-zA-Z]+)|cos\s*([a-zA-Z]+)|tan\s*([a-zA-Z]+)/g, // Trig functions
  /ln\s*([a-zA-Z]+)/g, // Natural log
  /([a-zA-Z])\s*∘\s*([a-zA-Z])/g, // Function composition: f ∘ g
  /([a-zA-Z])\^\{?\-?1\}?/g, // Inverse notation: f^{-1}
  /2π\/([a-zA-Z])/g, // Period notation: 2π/b
];

// Convert common mathematical unicode/text to LaTeX
const convertToLatex = (text: string): string => {
  return text
    // Greek letters
    .replace(/θ/g, '\\theta')
    .replace(/π/g, '\\pi')
    .replace(/Σ/g, '\\Sigma')
    .replace(/∫/g, '\\int')
    .replace(/√/g, '\\sqrt')
    .replace(/∞/g, '\\infty')
    .replace(/α/g, '\\alpha')
    .replace(/β/g, '\\beta')
    .replace(/γ/g, '\\gamma')
    .replace(/δ/g, '\\delta')
    .replace(/ε/g, '\\epsilon')
    
    // Set symbols
    .replace(/∈/g, '\\in')
    .replace(/∪/g, '\\cup')
    .replace(/∩/g, '\\cap')
    .replace(/ℤ/g, '\\mathbb{Z}')
    .replace(/ℚ/g, '\\mathbb{Q}')
    .replace(/ℝ/g, '\\mathbb{R}')
    .replace(/ℕ/g, '\\mathbb{N}')
    
    // Operators and relations
    .replace(/≤/g, '\\leq')
    .replace(/≥/g, '\\geq')
    .replace(/×/g, '\\times')
    .replace(/÷/g, '\\div')
    .replace(/±/g, '\\pm')
    .replace(/∘/g, '\\circ')
    .replace(/·/g, '\\cdot')
    .replace(/≠/g, '\\neq')
    .replace(/−/g, '-') // Replace unicode minus with regular minus
    
    // Special patterns from IB Math AI syllabus
    .replace(/([a-zA-Z])\s*×\s*10\^([kK0-9\-\+]+)/g, '$1 \\times 10^{$2}')
    .replace(/([a-zA-Z])\^([a-zA-Z0-9\-\+]+)/g, '$1^{$2}')
    .replace(/([a-zA-Z0-9]+)_([a-zA-Z0-9\-\+]+)/g, '$1_{$2}')
    .replace(/([a-zA-Z])\s*=\s*([a-zA-Z])\s*\+\s*([a-zA-Z])i/g, '$1 = $2 + $3i')
    .replace(/i\^2\s*=\s*−1/g, 'i^2 = -1')
    .replace(/sin\s*([a-zA-Z]+)/g, '\\sin $1')
    .replace(/cos\s*([a-zA-Z]+)/g, '\\cos $1')
    .replace(/tan\s*([a-zA-Z]+)/g, '\\tan $1')
    .replace(/ln\s*([a-zA-Z]+)/g, '\\ln $1')
    .replace(/([a-zA-Z])\s*∘\s*([a-zA-Z])/g, '$1 \\circ $2')
    .replace(/([a-zA-Z])\^\{?\-?1\}?/g, '$1^{-1}')
    .replace(/2π\/([a-zA-Z])/g, '\\frac{2\\pi}{$1}')
    .replace(/([a-zA-Z0-9]+)\s*≤\s*([a-zA-Z])\s*<\s*([a-zA-Z0-9]+)/g, '$1 \\leq $2 < $3')
    .replace(/([a-zA-Z])\s*∈\s*ℤ/g, '$1 \\in \\mathbb{Z}')
    .replace(/([a-zA-Z])\s*∈\s*ℚ/g, '$1 \\in \\mathbb{Q}')
    
    // Trigonometric rules and formulas
    .replace(/([a-zA-Z])\/sin([A-Z])\s*=\s*([a-zA-Z])\/sin([A-Z])/g, '\\frac{$1}{\\sin $2} = \\frac{$3}{\\sin $4}')
    .replace(/([a-zA-Z])\^2\s*=\s*([a-zA-Z])\^2\s*\+\s*([a-zA-Z])\^2\s*−\s*([a-zA-Z0-9]+)([a-zA-Z])([a-zA-Z])\s*cos\s*([A-Z])/g, '$1^2 = $2^2 + $3^2 - $4$5$6 \\cos $7')
    .replace(/cos\s*([A-Z])\s*=\s*\(([a-zA-Z])\^2\s*\+\s*([a-zA-Z])\^2\s*−\s*([a-zA-Z])\^2\)\/\(([a-zA-Z0-9]+)([a-zA-Z])([a-zA-Z])\)/g, '\\cos $1 = \\frac{$2^2 + $3^2 - $4^2}{$5$6$7}')
    
    // Function notation
    .replace(/([a-zA-Z])\(([a-zA-Z])\)/g, '$1($2)')
    .replace(/y\s*=\s*([a-zA-Z]+)\s*\+\s*([a-zA-Z])/g, 'y = $1 + $2')
    .replace(/y\s*=\s*([a-zA-Z]+)x\s*\+\s*([a-zA-Z])/g, 'y = $1x + $2')
    .replace(/([a-zA-Z]+)x\s*\+\s*([a-zA-Z]+)y\s*\+\s*([a-zA-Z]+)\s*=\s*0/g, '$1x + $2y + $3 = 0')
    .replace(/y\s*−\s*([a-zA-Z]+)([0-9]+)\s*=\s*([a-zA-Z])\(x\s*−\s*([a-zA-Z]+)([0-9]+)\)/g, 'y - $1_$2 = $3(x - $4_$5)')
    
    // Matrix notation
    .replace(/([A-Z])\s*=\s*([A-Z])\s*([A-Z])\^([a-zA-Z0-9\-\+]+)\s*([A-Z])\^\{?\-?1\}?/g, '$1 = $2 $3^{$4} $5^{-1}')
    .replace(/([A-Z])x\s*=\s*([a-zA-Z])/g, '$1\\mathbf{x} = \\mathbf{$2}')
    
    // Common fractions and expressions
    .replace(/([a-zA-Z0-9\+\-\*]+)\/([a-zA-Z0-9\+\-\*]+)/g, '\\frac{$1}{$2}')
    .replace(/½/g, '\\frac{1}{2}')
    
    // Square roots
    .replace(/√\(([^)]+)\)/g, '\\sqrt{$1}')
    .replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');
};

// Check if text contains mathematical content
const containsMath = (text: string): boolean => {
  return MATH_PATTERNS.some(pattern => pattern.test(text)) ||
         /[θπΣ∫√∞αβγδε∈∪∩ℤℚℝℕ≤≥×÷±∘·≠]/.test(text) ||
         /\^|\$|\{|\}|\\|_/.test(text);
};

// Parse content and render math expressions
const parseAndRenderMath = (content: string, inline: boolean = true): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  
  // First, handle explicit LaTeX delimiters
  if (content.includes('$$') || content.includes('$')) {
    let remaining = content;
    let key = 0;
    
    // Handle block math first ($$...$$)
    const blockMathRegex = /\$\$([^$]+)\$\$/g;
    let blockMatch;
    while ((blockMatch = blockMathRegex.exec(remaining)) !== null) {
      const before = remaining.substring(0, blockMatch.index);
      if (before) parts.push(<span key={key++}>{before}</span>);
      
      parts.push(
        <BlockMath key={key++} math={blockMatch[1].trim()} />
      );
      
      remaining = remaining.substring(blockMatch.index + blockMatch[0].length);
    }
    
    // Handle inline math ($...$)
    const inlineMathRegex = /\$([^$]+)\$/g;
    let inlineMatch;
    let lastIndex = 0;
    
    while ((inlineMatch = inlineMathRegex.exec(remaining)) !== null) {
      const before = remaining.substring(lastIndex, inlineMatch.index);
      if (before) parts.push(<span key={key++}>{before}</span>);
      
      parts.push(
        <InlineMath key={key++} math={inlineMatch[1].trim()} />
      );
      
      lastIndex = inlineMatch.index + inlineMatch[0].length;
    }
    
    const after = remaining.substring(lastIndex);
    if (after) parts.push(<span key={key++}>{after}</span>);
    
    return parts;
  }
  
  // Auto-detect and convert mathematical expressions
  if (containsMath(content)) {
    const latexContent = convertToLatex(content);
    
    // Split by potential math expressions and render appropriately
    const mathSections = latexContent.split(/(\\\w+\{[^}]*\}|\\\w+\s+\w+|[a-zA-Z]\^?\{?[^}]*\}?|\\frac\{[^}]*\}\{[^}]*\})/);
    
    return mathSections.map((section, index) => {
      if (section.includes('\\') || section.match(/[a-zA-Z]\^|_/)) {
        try {
          return inline ? 
            <InlineMath key={index} math={section} /> : 
            <BlockMath key={index} math={section} />;
        } catch (error) {
          // If KaTeX fails, render as text
          return <span key={index}>{section}</span>;
        }
      }
      return <span key={index}>{section}</span>;
    });
  }
  
  // No math detected, return as plain text
  return [<span key={0}>{content}</span>];
};

export default function MathRenderer({ content, inline = true }: MathRendererProps) {
  try {
    const renderedContent = parseAndRenderMath(content, inline);
    return <>{renderedContent}</>;
  } catch (error) {
    console.warn('Math rendering error:', error);
    return <span>{content}</span>;
  }
}

// Helper function to detect if content should be math-rendered
export const shouldRenderMath = (content: string): boolean => {
  return containsMath(content);
};

// Helper function for batch processing
export const renderMathContent = (content: string, inline: boolean = true): React.ReactNode => {
  return <MathRenderer content={content} inline={inline} />;
};