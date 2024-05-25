import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName:'Akash', lastName:'M Kumar', email: 'akashmkumar1@gmail.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'} 
            subtext="Access and manage your account and traansactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.56}
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar
      user = {loggedIn}
      transactions={[]}
      banks={[{currentBalance: 1234.56}, {currentBalance: 2345.67}]}
      /> 
    </section>
  )
}

export default Home