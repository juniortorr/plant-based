// lib/dbConnect.tsx
const uri = process.env.MONGO;

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
