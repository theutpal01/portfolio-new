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
	name: string;
	color?: "primary" | "secondary" | "white";
	onClick?: () => void;
	children?: React.ReactNode;
}

interface GroupButtonType extends ButtonType {
	id: string;
	active?: string;
}

interface CardGroupType {
	title?: string;
	className?: string;
	children: React.ReactNode;
}

interface LinkType {
	href: string;
	scroll?: boolean;
	className?: string;
	target?: string;
	onClick?: () => (void);
	children: React.ReactNode;
}

export type { ProjectType, ButtonType, GroupButtonType, CardGroupType, LinkType };