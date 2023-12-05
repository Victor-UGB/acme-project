import Table from "@/app/ui/customers/table"
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data"

export default async function Page({searchParams} : {
    searchParams? : {
        query? :string
    }
}) {
    const query = searchParams?.query || ""
    const customers = await fetchCustomers()
    const filteredCustomers = await fetchFilteredCustomers(query)
    // console.log(customers)
    console.log(filteredCustomers)
    console.log(query)
    return (
        <main>
            <div>
                <div>
                    <Table customers={filteredCustomers}/>
                </div>
            </div>
        </main>
    )
}