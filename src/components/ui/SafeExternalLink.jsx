import React from 'react';

const SafeExternalLink = ({ 
  href, 
  children, 
  className = "", 
  ariaLabel = "",
  showIcon = true,
  ...props 
}) => {
  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
  
  if (!isExternal) {
    return <a href={href} className={className} aria-label={ariaLabel} {...props}>{children}</a>;
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
    >
      {children}
      {showIcon && (
        <svg
          className="inline-block w-3 h-3 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
};

export default SafeExternalLink;
