const sharePrice = (invested, changes) => 
 changes.reduce((i, c) => i * (1 + c / 100), invested).toFixed(2);
