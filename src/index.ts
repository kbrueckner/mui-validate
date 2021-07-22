import { useValidation as uv } from './components/ValidationContext';
import VG from './components/ValidationGroup';
import V from './components/Validate';
import AD from './components/AutoDisabler';

export const ValidationGroup = VG;
export const Validate = V;
export const AutoDisabler = AD;

export const useValidation = uv;
