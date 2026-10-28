import { useState } from 'react'

type AddressDisplayProps = {
  address: string
}

export function AddressDisplay({ address }: AddressDisplayProps) {
  const [copied, setCopied] = useState(false)

  const short = `${address.slice(0, 6)}...${address.slice(-6)}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      title={address}
      style={{
        padding: '8px 12px',
        fontFamily: 'monospace',
        fontSize: '14px',
        cursor: 'pointer',
      }}
    >
      {copied ? 'Copied!' : short}
    </button>
  )
}
