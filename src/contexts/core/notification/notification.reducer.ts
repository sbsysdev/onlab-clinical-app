// react
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// types
import { StandardNotification } from '@/shared/types';
// configs
import { AppState } from '../store';

interface NotificationState<T extends StandardNotification = StandardNotification> {
    notificationList: T[];
}

const initialNotificationState: NotificationState = {
    notificationList: [],
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialNotificationState,
    reducers: {
        addNotification: <T extends StandardNotification>(
            state: NotificationState<T>,
            action: PayloadAction<T>
        ) => {
            state.notificationList.push(action.payload);
        },
        removeNotification: (state, action: PayloadAction<string>) => {
            state.notificationList = state.notificationList.filter(
                notification => notification.ID != action.payload
            );
        },
    },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationState = ({ notification }: AppState) => notification;
export const notificationActions = notificationSlice.actions;
