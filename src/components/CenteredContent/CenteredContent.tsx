import React from 'react';

interface CenteredContentProps {
	children: React.ReactNode
}

const CenteredContent: React.FC<CenteredContentProps> = ({ children }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			{children}
		</div>
	);
};

export default CenteredContent;
