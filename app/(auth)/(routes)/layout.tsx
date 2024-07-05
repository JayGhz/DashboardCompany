export default function LayaoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <p>Jay17 Dashboard</p>
            <h1 className="text-3xl my-2">
                Welcome to Jay17 Dashboard!
            </h1>
            <h2 className="text-2xl mb-3">Dashboard</h2>
            {children}
        </div>
    );
}