import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../../modules/Layout/Layout'

const MyAccount: NextPage<{}> = () => {
    return (
        <Layout>
            <div>my account</div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //data fetching goes here
    const { locale } = context
    return {
        props: {
            ...(await serverSideTranslations((locale as string) ?? 'en')),
        },
    }
}

export default MyAccount
