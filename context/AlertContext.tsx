"use client"
import { createContext, useState, useContext, ReactNode } from "react";
import { Alert, AlertWrapper } from "@/components/ui/alerts";
import { AlertType } from "@/utils/types";
import { v4 as uuid } from "uuid";

type AlertWithId = AlertType & { id: string };

const AlertContext = createContext<{
	showAlert: (alert: AlertType) => void;
}>({showAlert: () => {}});

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({children} : {children: ReactNode}) => {
	const [alerts, setAlerts] = useState<AlertWithId[]>([]);

	const showAlert = (alert: AlertType) => {
		const id = uuid();
		setAlerts((prev) => [...prev, { ...alert, id}]);

		setTimeout(() => {
			setAlerts((prev) => prev.filter(e => e.id !== id));
		}, (alert.delay || 3) * 1000);
	};

	return (
		<AlertContext.Provider value={{ showAlert }}>
			{children}
			<AlertWrapper>
			{alerts.map((alert) => (
				<Alert
					key={alert.id}
					show={true}
					{...alert}
					onClose={() => setAlerts((prev) => prev.filter(e => e.id !== alert.id))}
				/>
			))}
			</AlertWrapper>
		</AlertContext.Provider>
	)
}