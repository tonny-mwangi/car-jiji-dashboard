
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarUploadForm from "@/components/dashboard/CarUploadForm";
import ListedCarsTable from "@/components/dashboard/ListedCarsTable";
import { Card } from "@/components/ui/card";
import { ArrowUp, Calendar, Car, DollarSign } from "lucide-react";

const DashboardPage = () => {
  // Would come from an API in a real application
  const stats = {
    totalBookings: 20,
    activeCars: 3,
    totalRevenue: 1080,
    pendingBookings: 2,
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-carjiji-blue">Owner Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">${stats.totalRevenue}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600 flex items-center">
            <ArrowUp className="h-3 w-3 mr-1" />
            <span>12% from last month</span>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Cars</p>
              <h3 className="text-2xl font-bold">{stats.activeCars}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-blue-600">
            {stats.activeCars} cars available for rent
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Bookings</p>
              <h3 className="text-2xl font-bold">{stats.totalBookings}</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-purple-600">
            {stats.pendingBookings} pending bookings
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Rating</p>
              <h3 className="text-2xl font-bold">4.8/5</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg 
                className="h-6 w-6 text-yellow-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
          <div className="mt-2 text-sm text-yellow-600">
            Based on 15 reviews
          </div>
        </Card>
      </div>
      
      <Tabs defaultValue="cars" className="mb-8">
        <TabsList>
          <TabsTrigger value="cars">Your Cars</TabsTrigger>
          <TabsTrigger value="add">Add New Car</TabsTrigger>
        </TabsList>
        <TabsContent value="cars" className="pt-6">
          <ListedCarsTable />
        </TabsContent>
        <TabsContent value="add" className="pt-6">
          <CarUploadForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
