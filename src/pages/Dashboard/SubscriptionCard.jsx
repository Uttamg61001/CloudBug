import React from 'react'

const SubscriptionCard = () => {
    return (
        <div className="bg-white text-card-foreground p-6 rounded-lg shadow-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Subscription</h2>
                <div className="flex space-x-3">
                    <button className="text-muted-foreground">
                        <img undefinedhidden="true" alt="search-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" />
                    </button>
                    <button className="text-muted-foreground">
                        <img undefinedhidden="true" alt="menu-icon" src="https://openui.fly.dev/openui/24x24.svg?text=☰" />
                    </button>
                </div>
            </div>
            <div className="flex border-b border-border mb-4">
                <button className="flex-1 py-2 text-center border-b-2 border-primary text-primary-foreground">Used</button>
                <button className="flex-1 py-2 text-center text-muted-foreground">Unused</button>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img className="w-10 h-10 rounded-lg bg-muted" src="https://placehold.co/40x40" alt="Profile Image" />
                        <div>
                            <p className="font-semibold">Sandro Tavartkiladze</p>
                            <p className="text-muted-foreground text-sm">31 Invoices</p>
                        </div>
                    </div>
                    <p className="text-destructive-foreground">$8,478.11</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img className="w-10 h-10 rounded-lg bg-muted" src="https://placehold.co/40x40" alt="Profile Image" />
                        <div>
                            <p className="font-semibold">Max Mustermann</p>
                            <p className="text-muted-foreground text-sm">2 Invoices</p>
                        </div>
                    </div>
                    <p className="text-destructive-foreground">$3,900.50</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img className="w-10 h-10 rounded-lg bg-muted" src="https://placehold.co/40x40" alt="Profile Image" />
                        <div>
                            <p className="font-semibold">Max Mustermann</p>
                            <p className="text-muted-foreground text-sm">2 Invoices</p>
                        </div>
                    </div>
                    <p className="text-destructive-foreground">$3,900.50</p>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard