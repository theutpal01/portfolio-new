interface ProjectType {
	title: string;
	image: string; 
	description: string;
	github_url: string;
	site_url: string;
}

interface ButtonType {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
}

interface LinkType {
	href: string;
	className?: string;
	target?: string;
	children: React.ReactNode;
}

export type { ProjectType, ButtonType, LinkType };