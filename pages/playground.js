// =================================================
// Welcome to NextJS ZEBEDEE Starter
// =================================================
//
// The goal here is to showcase a simple example of
// the @zbd/node library being used to interact with
// the ZEBEDEE API on a NodeJS environment.

// Check `/pages/api/wallet` to see how simple it is
// to fetch/post information to the ZEBEDEE API

// This index.js shows a simple way to fetch the
// /api/wallet backend endpoint and showcase the
// response data on the homepage.
//
// =================================================

// Lib Imports
import Head from 'next/head'
import { PureComponent } from 'react'
import { Inter } from 'next/font/google'

// Styles
import styles from '@/styles/Home.module.css'
import { WalletBalanceModule } from '@/components/wallet-balance'
import { SendLightningAddressModule } from '@/components/send-lightning-address'
import { ValidateLightningAddressModule } from '@/components/validate-lightning-address'
import { CreateChargeModule } from '@/components/create-payment-request'
import { CreateWithdrawalRequestModule } from '@/components/create-withdrawal-request'
import { DecodeChargeModule } from '@/components/decode-charge'
import { SendGamertagPaymentModule } from '@/components/send-gamertag-payment'
import { SendPaymentModule } from '@/components/send-payment'
import { BTCUSDRateModule } from '@/components/btcusd-exchange-rate'
import { IPAddressModule } from '@/components/is-supported-region'
import { GetWithdrawalRequestModule } from '@/components/get-withdrawal-request'
import { GetChargeModule } from '@/components/get-charge'
import { GetPaymentModule } from '@/components/get-payment'
import { GetGamertagPaymentModule } from '@/components/get-gamertag-payment'

// Fonts
const inter = Inter({ subsets: ['latin'] })

// Component
export default class ZBDNextJSStarter extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Dev Playground - ZEBEDEE API</title>
          <meta name="description" content="Open source starter kit for fullstack applications including a Dev Playground showcasing the many features available for Payins and Payouts on the ZEBEDEE API." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <meta property="og:url" content="https://playground.dev.zebedee.cloud" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dev Playground - ZEBEDEE API" />
          <meta property="og:description" content="Open source starter kit for fullstack applications including a Dev Playground showcasing the many features available for Payins and Payouts on the ZEBEDEE API." />
          <meta property="og:image" content="https://i.imgur.com/QvFJ7mq.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="playground.dev.zebedee.cloud" />
          <meta property="twitter:url" content="https://playground.dev.zebedee.cloud" />
          <meta name="twitter:title" content="Dev Playground - ZEBEDEE API" />
          <meta name="twitter:description" content="Open source starter kit for fullstack applications including a Dev Playground showcasing the many features available for Payins and Payouts on the ZEBEDEE API." />
          <meta name="twitter:image" content="https://i.imgur.com/QvFJ7mq.png" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              Playground Modules for <b>ZEBEDEE API</b>
            </p>
            <div>
              <WalletBalanceModule />
            </div>
          </div>

          <div className={styles.mainGridWrapper}>
            <h1>Charges</h1>
            <div className={styles.moduleGrid}>
              <CreateChargeModule />
              <GetChargeModule />
            </div>

            <h1>Withdrawal Requests</h1>
            <div className={styles.moduleGrid}>
              <CreateWithdrawalRequestModule />
              <GetWithdrawalRequestModule />
            </div>

            <h1>Lightning Address</h1>
            <div className={styles.moduleGrid}>
              <ValidateLightningAddressModule />
              <SendLightningAddressModule />
            </div>

            <h1>Utilities</h1>
            <div className={styles.moduleGrid}>
              <BTCUSDRateModule />
              <IPAddressModule />
            </div>

            <h1>Decode Payment Requests</h1>
            <div className={styles.moduleGrid}>
              <DecodeChargeModule />
            </div>

            <h1>ZBD Gamertag</h1>
            <div className={styles.moduleGrid}>
              <SendGamertagPaymentModule />
              <GetGamertagPaymentModule />
            </div>

            <h1>Payments</h1>
            <div className={styles.moduleGrid}>
              <SendPaymentModule />
              <GetPaymentModule />
            </div>
          </div>
        </main>
      </>
    )
  }
}
