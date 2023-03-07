import React from 'react'
import useErrorBoundary from 'use-error-boundary'
import App from './App'

function onDidCatch (error, errorInfo) {
  // 这里可以将程序错误信息记录到远端服务器或展示在页面
  console.log('componentDidCatch')
}

export default function IErrorBoundary () {
  const { ErrorBoundary, didCatch, error, reset } = useErrorBoundary({
    onDidCatch
  })

  return (
    <>
      {didCatch ? (
        <div>
          <p>An error has been caught: {error.message}</p>
          <button onClick={reset}>Try again</button>
        </div>
      ) : (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      )}
    </>
  )
}
