import React, { lazy, Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SideNavContext } from '../../providers/sidenav-provider/sidenav-provider';
import { DashboardNavigation, SideNavigation, TelegramButton, NoMatch, Spinner, ProtectedRoute } from '../../components';

import { DashboardContainer, DashboardMainContainer, DashboardViewsContainer } from './dashboard.styles';

// Routes
const Orders = lazy(() => import('./view-orders/view-orders'));
const MassOrder = lazy(() => import('./mass-order/mass-order'));
const Account = lazy(() => import('./account/account'));
const AddFunds = lazy(() => import('./add-funds/add-funds'));
const NewOrder = lazy(() => import('./new-order/new-order'));
const TicketSupport = lazy(() => import('./ticket-support/ticket-support'));

function Dashboard() {
	const { hidden } = useContext(SideNavContext);

	return (
		<DashboardContainer>
			{/* Side Navigation */}
			<SideNavigation isOpen={hidden} />

			{/* Dashboard Main Container */}
			<DashboardMainContainer>
				{/* Dashboard Navigation */}
				<DashboardNavigation />

				{/* Dashboard Views Container */}
				<DashboardViewsContainer className="contents">
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route index element={
								<ProtectedRoute>
									<Orders />
								</ProtectedRoute>
							}/>
							<Route path="mass-order" element={
								<ProtectedRoute>
									<MassOrder />
								</ProtectedRoute>
							}/>
							<Route path="add-funds" element={
								<ProtectedRoute>
									<AddFunds />
								</ProtectedRoute>
							}/>
							<Route path="account" element={
								<ProtectedRoute>
									<Account />
								</ProtectedRoute>
							}/>
							<Route path="book-order" element={
								<ProtectedRoute>
									<NewOrder />
								</ProtectedRoute>
							}/>
							<Route path="ticket-support" element={
								<ProtectedRoute>
									<TicketSupport />
								</ProtectedRoute>
							}/>
							<Route path="*" element={
								<ProtectedRoute>
									<NoMatch path="/dashboard" style={{ left: '63%' }} />
								</ProtectedRoute>
							}/>
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