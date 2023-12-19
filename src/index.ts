import dotenv from 'dotenv';
import { fetchAllTransactions } from './alchemy/get-transactions';

dotenv.config();

fetchAllTransactions();
