// lib/dbConnect.tsx
const uri =
  'mongodb+srv://junetorresdev:BhyfFIGTbEuUVknm@cluster0.7hh194e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

import { connect, ConnectionStates } from 'mongoose';

let isConnected: ConnectionStates;

export default async function connectDB() {
  if (isConnected) return;
  try {
    const db = await connect(uri);
    isConnected = db.connections[0].readyState;
    console.log('connected');
  } catch (err) {
    console.log(err);
  }
}

export { uri };
