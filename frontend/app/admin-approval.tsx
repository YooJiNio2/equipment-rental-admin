import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// 임시 데이터
const WAITING_USERS = [
  { id: '1', name: '김학생', studentId: '2022211756', major: '컴퓨터공학 3학년', date: '2026-04-20' },
  { id: '2', name: '임학생', studentId: '2023123456', major: '컴퓨터공학 2학년', date: '2026-04-21' },
];

export default function AdminApprovalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>회원가입 대기 목록</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView style={styles.content}>
       
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>전체 대기자</Text>
          <Text style={styles.summaryValue}>15 명</Text>
        </View>

        <Text style={styles.listTitle}>이름/학번 정보</Text>
        
        
        {WAITING_USERS.map((user) => (
          <TouchableOpacity 
            key={user.id} 
            style={styles.userCard}
            onPress={() => router.push('/admin-user-detail')} 
          >
            <View style={styles.userInfo}>
              <View>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userId}>{user.studentId}</Text>
              </View>
              
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>학생증 미확인</Text>
              </View>
            </View>
            
            <Text style={styles.userMajor}>[전공/학년] {user.major}</Text>
            <Text style={styles.userDate}>가입 신청: {user.date}</Text>
            
            
            <View style={styles.guideRow}>
              <Text style={styles.guideText}>상세보기 및 승인 처리 {'>'}</Text>
            </View>
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
  content: { padding: 20 },
  summaryCard: { backgroundColor: '#2E5BFF', padding: 20, borderRadius: 12, marginBottom: 25 },
  summaryLabel: { color: 'white', opacity: 0.8, fontSize: 14 },
  summaryValue: { color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 5 },
  listTitle: { fontSize: 16, fontWeight: '700', marginBottom: 15, color: '#444' },
  userCard: { 
    backgroundColor: 'white', 
    padding: 18, 
    borderRadius: 15, 
    marginBottom: 15, 
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5
  },
  userInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  userId: { color: '#777', fontSize: 14, marginTop: 2 },
  statusBadge: { backgroundColor: '#FFF3E0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  statusBadgeText: { fontSize: 11, color: '#FF9800', fontWeight: 'bold' },
  userMajor: { fontSize: 14, color: '#444', marginBottom: 4 },
  userDate: { fontSize: 12, color: '#999' },
  guideRow: { 
    marginTop: 15, 
    paddingTop: 12, 
    borderTopWidth: 1, 
    borderTopColor: '#F0F0F0', 
    alignItems: 'flex-end' 
  },
  guideText: { fontSize: 12, color: '#2E5BFF', fontWeight: '600' }
});