import React from 'react'

export const TableList = () => {
    const clients = [
        { id: 1, name: "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "100", isactive: true },
        { id: 2, name: "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "101", isactive: false },
        { id: 3, name: "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "102", isactive: true },
        { id: 4, name: "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "103", isactive: false },
    ];
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Rate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => {
                        return (
                            <tr className="hover:bg-base-300" key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td>
                                    <button className={`btn w-20 rounded-full text-black ring-2 ${client.isactive ? "btn-primary" : "btn-outline"}`}>
                                        {client.isactive ? 'Active' : 'Inactive'}
                                    </button>
                                </td>
                                <td>
                                    <button className='btn shadow-2xl hover:bg-gray-600 rounded-2xl btn-secondary'>Update</button>
                                </td>
                                <td>
                                    <button className='btn shadow-2xl hover:bg-gray-600 rounded-2xl btn-accent'>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
