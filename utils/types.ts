import React from "react";

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

interface InputType {
	id: string;
	labelValue?: string;
	labelClass?: string;
	inputClass?: string;
	placeholder?: string;
	type?: string;
	value?: string;
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement> | React.MouseEvent<HTMLTextAreaElement>) => void;
}

export type { ProjectType, ButtonType, GroupButtonType, CardGroupType, LinkType, InputType };