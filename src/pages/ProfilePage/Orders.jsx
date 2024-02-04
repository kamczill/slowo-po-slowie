import React from 'react'
import OrderCard from '../../components/OrderCard'
import { useAuth } from '../../contexts/authContext'
import { useQuery } from 'react-query'
import Spinner from '../../components/Spinner'
import customAxios from '../../axios/axios'

const Orders = () => {
  const { user } = useAuth();

  const getOrders = async () => {
      const res = await customAxios(`order-history/${user?.id}`)
      return res.data;
  }

  const query = useQuery(`orders-${user?.id}`, getOrders, {
      enabled: !!user?.id
  })

  const displayOrders = () => {
    if(query.isSuccess) {
      const mappedOrders = query?.data?.map(q => (
        <OrderCard
          key={q.id} 
          orderId={q.id}
          date={q.order_date}
          price={q.total_cost}
        />
      ))
      return mappedOrders.reverse();
    }
  }

  
  return (
    <div className="w-full bg-white p-6">
      <h2 className="text-left text-3xl font-semibold md:px-14">
        Moje zamówienia
      </h2>
      <main className="mt-12 flex flex-col gap-10 text-lg">
        {displayOrders()}
        {query.isLoading && <div className="flex justify-center"><Spinner /></div>}
        {query.isError && <p>Coś poszło nietak!</p>}
      </main>
    </div>
  )
}

export default Orders