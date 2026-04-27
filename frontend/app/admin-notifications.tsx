import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// 임시 데이터
const NOTI_DATA = [
  { id: '1', type: 'OVERDUE', message: '김학생님의 아두이노 키트 01이 연체되었습니다.', time: '10분 전', isRead: false },
  { id: '3', type: 'BROKEN', message: '박철수님이 라즈베리 파이 파손 보고를 접수했습니다.', time: '1시간 전', isRead: false },
  { id: '4', type: 'ACCOUNT_PENDING', message: '신규 사용자 최민수님의 가입 승인 대기 중입니다.', time: '3시간 전', isRead: true },
];


const getBadgeColor = (type: string) => {
  switch (type) {
    case 'OVERDUE': return '#FF4D4D'; // 빨강
    case 'RETURNED': return '#00C853'; // 초록
    case 'BROKEN': return '#FF9800'; // 주황
    case 'ACCOUNT_PENDING': return '#2E5BFF'; // 파랑
    default: return '#999999'; // 회색
  }
};

export default function AdminNotificationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>알림 센터</Text>
        <TouchableOpacity>
          <Text style={styles.readAllText}>모두 읽음</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {NOTI_DATA.map((noti) => (
          <TouchableOpacity 
            key={noti.id} 
            style={[styles.notiCard, !noti.isRead && styles.unreadCard]}
          >
            <View style={styles.notiHeader}>
              
              <View style={[styles.typeBadge, { backgroundColor: getBadgeColor(noti.type) }]}>
                <Text style={styles.typeText}>{noti.type}</Text>
              </View>
              <Text style={styles.timeText}>{noti.time}</Text>
            </View>
            <Text style={styles.messageText}>{noti.message}</Text>
            {!noti.isRead && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingTop: 60, 
    paddingHorizontal: 20, 
    paddingBottom: 20, 
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  backText: { fontSize: 24, color: '#333' },
  readAllText: { color: '#666', fontSize: 13 },
  content: { padding: 15 },
  notiCard: { 
    backgroundColor: 'white', 
    padding: 18, 
    borderRadius: 12, 
    marginBottom: 10, 
    elevation: 2, 
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  unreadCard: { borderLeftWidth: 4, borderLeftColor: '#2E5BFF' },
  notiHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  typeBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  typeText: { fontSize: 10, fontWeight: 'bold', color: 'white' },
  timeText: { fontSize: 12, color: '#999' },
  messageText: { fontSize: 14, color: '#333', lineHeight: 20 },
  unreadDot: { 
    position: 'absolute', 
    top: 15, 
    right: 15, 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: '#2E5BFF' 
  },
});