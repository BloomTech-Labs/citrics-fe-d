export const mobileStyles = {};
export const tabletStyles = {};
export const notebookStyles = {};
export const desktopStyles = city => ({
  cityCardWrapper: {
    // flex: 'none',
    // order: '2",
    // alignSelf: 'flex-start',
    // flexGrow: '0",
    margin: '2%',
    // padding: '8px',
    // paddingBottom: '0px',
    cursor: 'pointer',
    color: city.color,
  },
  cardHeaderContainer: {
    justifySelf: 'center',
    width: 'auto',
    padding: '24px, 0px, 16px, 0px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cityNameText: {
    paddingTop: '8px',
    paddingLeft: '16px',
    color: city.color,
  },
  closeCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderRadius: '15px',
    width: 'auto',
    height: '47px',
    padding: '30px, 0px, 2px, 24px',
    overflow: 'hidden',
    border: `3px solid ${city.color}`,
  },
  openCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderRadius: '@sty-border-radius-medium',
    width: 'auto',
    height: 'auto',
    justifyContent: 'top',
    border: `3px solid ${city.color}`,
  },
  cardIcons: {
    display: 'flex',
    margin: '1%',
    paddingTop: '8px',
    paddingRight: '16px',
  },
  cityCardBodyContainer: {
    width: '100%',
    height: '240px',
    borderRadius: '10px',
    position: 'relative',
  },
  cityCardBodyWrapperImg: {
    width: '100%',
    height: '100%',
    marginBottom: '4%',
    objectFit: 'fill',
    borderRadius: '10px',
  },
  cityCardBodyWrapperUl: {
    listStyleType: 'none',
    height: '200px',
    backgroundColor: 'rgba(0, 0, 0, 0.664)',
    position: 'absolute',
    top: '20px',
    right: '10px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    margin: '0',
    color: 'white',
  },
});
export const xlStyles = {};
