import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardNavigation, SideNavigation, TelegramButton, NoMatch, Spinner } from '../../components';

import { DashboardContainer, DashboardMainContainer, DashboardViewsContainer } from './dashboard.styles';

// Routes
const Orders = lazy(() => import('./view-orders/view-orders'));
const MassOrder = lazy(() => import('./mass-order/mass-order'));
const Account = lazy(() => import('./account/account'));
const AddFunds = lazy(() => import('./add-funds/add-funds'));
const NewOrder = lazy(() => import('./new-order/new-order'));
const TicketSupport = lazy(() => import('./ticket-support/ticket-support'));

function Dashboard() {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);

	return (
		<DashboardContainer>
			{/* Side Navigation */}
			<SideNavigation isOpen={isSideNavOpen} />

			{/* Dashboard Main Container */}
			<DashboardMainContainer>
				{/* Dashboard Navigation */}
				<DashboardNavigation 
					isOpen={isSideNavOpen} 
					setIsOpen={setIsSideNavOpen} 
				/>

				{/* Dashboard Views Container */}
				<DashboardViewsContainer className="contents">
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route index element={<Orders />} />
							<Route path="mass-order" element={<MassOrder />} />
							<Route path="add-funds" element={<AddFunds />} />
							<Route path="account" element={<Account />} />
							<Route path="book-order" element={<NewOrder />} />
							<Route path="ticket-support" element={<TicketSupport />} />
							<Route path="*" element={<NoMatch path="/dashboard" style={{ left: '63%' }} />} />
						</Routes>
					</Suspense>
				</DashboardViewsContainer>
			</DashboardMainContainer>

			{/* Telegram Button */}
			<TelegramButton />
		</DashboardContainer>
	)
}

export default Dashboard