import '../../models/db';
import app from '../..';

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on', `localhost: ${PORT}`);
});
