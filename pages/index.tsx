import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

export default function Home() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/sujet.md')
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du sujet:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mb-4"></div>
          <div className="text-xl text-gray-700">Chargement du sujet...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal */}
        <article className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-8 py-8 md:px-12 md:py-10">
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  // Titres avec style Markdown classique
                  h1: ({node, ...props}) => (
                    <h1 
                      className="text-3xl font-bold text-gray-900 mt-0 mb-6 pb-3 border-b border-gray-200" 
                      {...props} 
                    />
                  ),
                  h2: ({node, ...props}) => (
                    <h2 
                      className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200" 
                      {...props} 
                    />
                  ),
                  h3: ({node, ...props}) => (
                    <h3 
                      className="text-xl font-semibold text-gray-900 mt-8 mb-3" 
                      {...props} 
                    />
                  ),
                  h4: ({node, ...props}) => (
                    <h4 
                      className="text-lg font-semibold text-gray-900 mt-6 mb-2" 
                      {...props} 
                    />
                  ),
                  
                  // Paragraphes
                  p: ({node, ...props}) => (
                    <p 
                      className="text-base text-gray-700 leading-7 mb-4" 
                      {...props} 
                    />
                  ),
                  
                  // Liens
                  a: ({node, ...props}) => (
                    <a 
                      className="text-blue-600 hover:underline" 
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props} 
                    />
                  ),
                  
                  // Listes
                  ul: ({node, ...props}) => (
                    <ul 
                      className="list-disc pl-6 mb-4 space-y-1" 
                      {...props} 
                    />
                  ),
                  ol: ({node, ...props}) => (
                    <ol 
                      className="list-decimal pl-6 mb-4 space-y-1" 
                      {...props} 
                    />
                  ),
                  li: ({node, ...props}) => (
                    <li 
                      className="text-gray-700 leading-7" 
                      {...props} 
                    />
                  ),
                  
                  // Code inline et blocs de code
                  code: ({node, inline, className, children, ...props}: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return inline ? (
                      <code 
                        className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" 
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <code 
                        className={`${className || ''} text-sm`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({node, ...props}) => (
                    <pre 
                      className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto mb-4 text-sm" 
                      {...props} 
                    />
                  ),
                  
                  // Citations
                  blockquote: ({node, ...props}) => (
                    <blockquote 
                      className="border-l-4 border-gray-300 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50" 
                      {...props} 
                    />
                  ),
                  
                  // Tableaux
                  table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-6">
                      <table 
                        className="min-w-full border-collapse border border-gray-300" 
                        {...props} 
                      />
                    </div>
                  ),
                  thead: ({node, ...props}) => (
                    <thead 
                      className="bg-gray-100" 
                      {...props} 
                    />
                  ),
                  th: ({node, ...props}) => (
                    <th 
                      className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900" 
                      {...props} 
                    />
                  ),
                  td: ({node, ...props}) => (
                    <td 
                      className="border border-gray-300 px-4 py-2 text-gray-700" 
                      {...props} 
                    />
                  ),
                  
                  // Ligne horizontale
                  hr: ({node, ...props}) => (
                    <hr 
                      className="my-8 border-t border-gray-300" 
                      {...props} 
                    />
                  ),
                  
                  // Texte en gras et italique
                  strong: ({node, ...props}) => (
                    <strong 
                      className="font-semibold text-gray-900" 
                      {...props} 
                    />
                  ),
                  em: ({node, ...props}) => (
                    <em 
                      className="italic" 
                      {...props} 
                    />
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
