import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">EMR Control Center</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Welcome Message */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-indigo-700">Welcome, Dr. {auth.user.name}</h3>
                                <p className="text-gray-600">Good Morning Sir, This update was deployed successfully via CI/CD Pipeline.</p>
                            </div>
                            
                            {/* EMR Statistics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="text-blue-800 font-semibold uppercase text-xs tracking-wider">Total Patients</p>
                                        <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Live</span>
                                    </div>
                                    <p className="text-3xl font-bold text-blue-900 mt-2">150</p>
                                </div>

                                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="text-emerald-800 font-semibold uppercase text-xs tracking-wider">Appointments Today</p>
                                        <span className="bg-emerald-200 text-emerald-800 text-xs px-2 py-1 rounded-full">New</span>
                                    </div>
                                    <p className="text-3xl font-bold text-emerald-900 mt-2">12</p>
                                </div>

                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="text-amber-800 font-semibold uppercase text-xs tracking-wider">Critical Alerts</p>
                                        <span className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded-full">Urgent</span>
                                    </div>
                                    <p className="text-3xl font-bold text-amber-900 mt-2">3</p>
                                </div>
                            </div>

                            {/* Recent Activity Table (Placeholder) */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <h4 className="font-semibold text-gray-700 mb-3">System Logs</h4>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Database connectivity: <strong className="ml-1 text-green-700">Online</strong>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        Last CI/CD Sync: <strong className="ml-1 text-blue-700">Just now</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}