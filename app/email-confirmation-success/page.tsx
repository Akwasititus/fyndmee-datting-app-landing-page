export default function EmailConfirmed() {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fafafa',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '440px',
          width: '100%',
          background: '#fff',
          borderRadius: '16px',
          padding: '48px 36px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: '#DC143C',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '32px'
          }}>
            ✓
          </div>
  
          <h1 style={{
            margin: '0 0 12px',
            fontSize: '24px',
            fontWeight: '600',
            color: '#1a1a1a'
          }}>
            You're all set!
          </h1>
  
          <p style={{
            margin: '0 0 32px',
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            You have successfully confirmed your email address.
          </p>
  
         
        </div>
      </div>
    );
  }