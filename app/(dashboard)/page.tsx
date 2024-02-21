"use client"

import { useOrganization } from "@clerk/nextjs"
import { BoardList } from "./_components/board-list"
import { EmptyOrg } from "./_components/empty-org"


interface DashboardPageProps {
    searchParams: {
        search?: string
        favorites?: string
    }
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
    const { organization } = useOrganization()

    return(
        <main className="flex-1 h-[calc(100%-80px)] p-6">
            {/* {JSON.stringify(searchParams)} */}
            {!organization ? (
                <EmptyOrg />
            ): (
                <BoardList 
                    orgId={organization.id}
                    query={searchParams}
                />
            )}
        </main>
    )
}

export default DashboardPage