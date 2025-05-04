module.exports = {
  hero: {
    backgroundColor: '#1a2a44',
    color: '#fff',
    textAlign: 'center',
    padding: '80px 20px',
    '& h1': {
      fontFamily: 'Georgia, serif',
      fontSize: '40px',
      marginBottom: '15px'
    },
    '& p': {
      fontSize: '20px',
      marginBottom: '25px'
    }
  },
  cta: {
    backgroundColor: '#d4a017',
    color: '#fff',
    padding: '12px 25px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#b88b14'
    }
  },
  about: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    '& h2': {
      fontFamily: 'Georgia, serif',
      fontSize: '30px',
      marginBottom: '15px'
    },
    '& p': {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      maxWidth: '600px',
      margin: '0 auto'
    }
  },
  contact: {
    padding: '50px 20px',
    textAlign: 'center',
    '& h2': {
      fontFamily: 'Georgia, serif',
      fontSize: '30px',
      marginBottom: '15px'
    },
    '& form': {
      maxWidth: '400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    '& input, & textarea': {
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    '& button': {
      backgroundColor: '#1a2a44',
      color: '#fff',
      padding: '12px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#15233b'
      }
    },
    '& p': {
      marginTop: '15px',
      fontSize: '14px'
    }
  },
  '@media (max-width: 768px)': {
    hero: {
      padding: '50px 20px',
      '& h1': { fontSize: '32px' },
      '& p': { fontSize: '18px' }
    },
    about: {
      '& h2': { fontSize: '24px' },
      '& p': { fontSize: '14px' }
    },
    contact: {
      '& h2': { fontSize: '24px' }
    }
  }
};
