import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// 임시 데이터
const NOTI_DATA = [
  { id: '1', type: 'OVERDUE', message: '⚠️ [연체] 김학생님의 맥북에어 01번의 반납 기한이 지났습니다.', time: '방금 전', isRead: false },
  { id: '2', type: 'BROKEN', message: '🛠️ [파손 보고] 이학생님의 라즈베리 파이 03번의 케이스 파손을 접수했습니다.', time: '10분 전', isRead: false },
  { id: '3', type: 'LOST', message: '📍 [분실 보고] 박학생님이 아두이노 키트의 센서 분실을 신고했습니다.', time: '1시간 전', isRead: false },
  { id: '4', type: 'ACCOUNT_APPROVED', message: '✅ [승인 완료] 신규 사용자 이철수님의 가입 승인이 완료되었습니다.', time: '3시간 전', isRead: true },
  { id: '5', type: 'ACCOUNT_REJECTED', message: '❌ [승인 거절] 김학생님의 학생증 식별 불가로 가입이 거절되었습니다.', time: '5시간 전', isRead: true },
  { id: '6', type: 'PARTIAL_LOST', message: '⚠️ [부분 분실] 맥북 충전기가 반납되지 않았습니다.', time: '어제', isRead: true },
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case 'OVERDUE': return '#FF4D4D';         
    case 'BROKEN':                           
    case 'LOST':                             
    case 'PARTIAL_LOST': return '#FF9800';    
    case 'ACCOUNT_APPROVED': return '#2E5BFF'; 
    case 'RETURNED': return '#00C853';        
    case 'ACCOUNT_REJECTED': return '#666666'; 
    default: return '#999999';
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