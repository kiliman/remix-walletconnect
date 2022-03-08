import { useEffect } from 'react'
import { connector } from '~/utils/wallet.client'

export default function Index() {
  useEffect(() => {
    console.log('WalletConnect status', connector.connected)
  })

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Remix WalletConnect</h1>
    </div>
  )
}
