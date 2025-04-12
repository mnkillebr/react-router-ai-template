import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function DashboardRoute() {
  return (
    <div className="flex h-screen">
      <main className="flex-1 p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is your dashboard. You can add more content here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No recent activity to show.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No stats available yet.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 