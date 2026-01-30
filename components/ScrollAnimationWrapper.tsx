
import React from 'react';

interface ScrollAnimationWrapperProps {
    children: React.ReactNode;
}

// Simple passthrough wrapper - animations are handled via CSS and useScrollAnimation hook in each component
const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ children }) => {
    return <>{children}</>;
};

export default ScrollAnimationWrapper;
