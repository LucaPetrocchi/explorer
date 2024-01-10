type transfer = "solana" | "picasso"

type txStatus = "confirmed" | "pending" | "failed"

export type transaction = {
  hashTx: string;
  transferTo: transfer;
  hashTo: string;
  transferFrom: transfer;
  hashFrom: string;
  amount: number;
  currency: string;
  fees: number;
  timestamp: string;
  status: txStatus;
}

export async function getData() {
  return data
}

export async function getDataByHash(hashTx: string | undefined) {
  return data.find(transaction => transaction.hashTx == hashTx)
}

const data: transaction[] = [
  {
    hashTx: "44454EC07B4F8F2E00FE1E442810855A47F5570415550C9D6D52A16C69FE98E3",
    transferTo: 'picasso',
    hashTo: '5xcuuUvtJvRW33N7WDUE9EfGGEVwqDL1pQsaWAvvDNYidLym',
    transferFrom: 'solana',
    hashFrom: 'GcukrUwFFKLhHMJwC87PtAHtRn8FbjYxCqQb3hmTBboQ6ZZ',
    amount: 248,
    currency: "PICA",
    fees: 0.002,
    timestamp: "19/07/2023",
    status: 'confirmed'
  },
  {
    hashTx: "7DFC7C698003E2C1605A54E7418886D77A1AF156473B6328AC3D2C8098F1001D",
    transferTo: 'solana',
    hashTo: '0xe8a0cba85d9c30deaa2e2b24cdbf68b9e9cae9cac84fbeb338ee33a1b2682437',
    transferFrom: 'picasso',
    hashFrom: '0x2c43ec6623f465b9847668fb6ef9bd248c28f5609da6e177f52be82c9e0c8a1e',
    amount: 248,
    currency: "SOL",
    fees: 0.002,
    timestamp: "19/07/2023",
    status: 'pending'
  },
  {
    hashTx: "98DD4953B88D7B6E767F0E9AEB8D15FF4F1CB269A17CB15F6906835F9572B7C9",
    transferTo: 'solana',
    hashTo: '0xe8a0cba85d9c30deaa2e2b24cdbf68b9e9cae9cac84fbeb338ee33a1b2682437',
    transferFrom: 'picasso',
    hashFrom: '0xf5f612d45a5367ef9a640199714ef49e621480084e19260cafc0230b72bdde55',
    amount: 248,
    currency: "SEI",
    fees: 0.002,
    timestamp: "19/07/2023",
    status: 'failed'
  },
  {
    hashTx: "ECF4F79CE36282AA91D46B9086CD3E803ACD0035D9E83E67CEC561123A58079C",
    transferTo: 'picasso',
    hashTo: '0xf5f612d45a5367ef9a640199714ef49e621480084e19260cafc0230b72bdde55',
    transferFrom: 'solana',
    hashFrom: '0x2c43ec6623f465b9847668fb6ef9bd248c28f5609da6e177f52be82c9e0c8a1e',
    amount: 248,
    currency: "DOT",
    fees: 0.002,
    timestamp: "19/07/2023",
    status: 'confirmed'
  },
  {
    hashTx: "D0F192EDBD343DB0F1870DE1B8CD50C00E8CE76481041EAC15A167D135695741",
    transferTo: 'solana',
    hashTo: '0xe8a0cba85d9c30deaa2e2b24cdbf68b9e9cae9cac84fbeb338ee33a1b2682437',
    transferFrom: 'picasso',
    hashFrom: '0x2c43ec6623f465b9847668fb6ef9bd248c28f5609da6e177f52be82c9e0c8a1e',
    amount: 248,
    currency: "SOL",
    fees: 0.002,
    timestamp: "19/07/2023",
    status: 'confirmed'
  },
]

