import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

export default function AdminScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>관리자 대시보드</Text>
        
        <TouchableOpacity 
          onPress={() => router.push('/admin-notifications')}
          style={styles.notiButton}
        >
          <Ionicons name="notifications-outline" size={28} color="#333" />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>

      {/* 요약 카드 섹션 */}
      <View style={styles.cardRow}>
        <TouchableOpacity 
          style={[styles.card, { backgroundColor: '#2E5BFF' }]}
          onPress={() => router.push('/admin-approval')}
        >
          <Text style={styles.cardTitle}>승인 대기 유저</Text>
          <Text style={styles.cardValue}>5 명</Text>
          <Text style={styles.cardSub}>학생증 확인 필요</Text>
        </TouchableOpacity>

        <TouchableOpacity 
  style={[styles.card, { backgroundColor: '#FF4D4D' }]}
  onPress={() => router.push('/admin-inventory')} // 알림센터 대신 인벤토리(기자재 관리)로 연결
>
  <Text style={styles.cardTitle}>연체 중 물품</Text>
  <Text style={styles.cardValue}>3 건</Text>
  <Text style={styles.cardSub}>반납 기한 초과</Text>
</TouchableOpacity>
      </View>

      <View style={styles.cardRow}>
        <TouchableOpacity 
          style={[styles.card, { backgroundColor: '#00C853' }]}
          onPress={() => router.push('/admin-inventory')}
        >
          <Text style={styles.cardTitle}>대여 중인 기자재</Text>
          <Text style={styles.cardValue}>12 건</Text>
          <Text style={styles.cardSub}>반납 처리 및 상태 관리</Text>
        </TouchableOpacity>
        
        {/* 파손/분실 관리 카드 추가 (기존 비어있던 공간 활용) */}
        <TouchableOpacity 
          style={[styles.card, { backgroundColor: '#6C757D' }]}
          onPress={() => router.push('/admin-inventory')}
        >
          <Text style={styles.cardTitle}>파손 및 분실</Text>
          <Text style={styles.cardValue}>2 건</Text>
          <Text style={styles.cardSub}>수리 및 폐기 관리</Text>
        </TouchableOpacity>
      </View>

      {/* 빠른 가기 버튼 섹션 */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/admin-inventory')}
        >
          <Text style={styles.buttonText}>[ 기자재 상태 관리 ]</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/admin-notifications')}
        >
          <Text style={styles.buttonText}>[ 전체 연체자 목록 ]</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>최근 대여/반납 활동</Text>
      <View style={styles.activityBox}>
        {/* DB 상태값 OVERDUE 반영 */}
        <Text style={[styles.activityText, { color: '#FF4D4D', fontWeight: '600' }]}>
          [연체] 김학생 (2022...) - 아두이노 키트 01 (3일 경과)
        </Text>
        <View style={styles.divider} />
        
        <Text style={styles.activityText}>[반납] 이영희 (2023...) - 맥북에어 05 (5분 전)</Text>
        <View style={styles.divider} />

        {/* DB 상태값 BROKEN 반영 */}
        <Text style={[styles.activityText, { color: '#FF9800', fontWeight: '600' }]}>
          [파손 보고] 조현민 (2021...) - 라즈베리 파이 (접수됨)
        </Text>
        <View style={styles.divider} />

        <Text style={styles.activityText}>[대여] 박철수 (2024...) - 보조배터리 02 (10분 전)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingHorizontal: 20, paddingTop: 60 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#1A1A1A' },
  notiButton: { padding: 5, position: 'relative' },
  redDot: { position: 'absolute', top: 5, right: 5, width: 9, height: 9, borderRadius: 5, backgroundColor: '#FF4D4D', borderWidth: 2, borderColor: 'white' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginTop: 25, marginBottom: 12, color: '#444' },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  card: { width: '48%', padding: 15, borderRadius: 15, elevation: 4 },
  cardTitle: { color: 'white', fontSize: 14, fontWeight: '600' },
  cardValue: { color: 'white', fontSize: 26, fontWeight: 'bold', marginVertical: 5 },
  cardSub: { color: 'white', fontSize: 11, opacity: 0.9 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 15 },
  actionButton: { width: '48%', backgroundColor: '#fff', paddingVertical: 12, borderRadius: 10, borderWidth: 1, borderColor: '#E0E0E0', alignItems: 'center' },
  buttonText: { color: '#2E5BFF', fontWeight: '600', fontSize: 13 },
  activityBox: { backgroundColor: 'white', borderRadius: 12, padding: 15, borderWidth: 1, borderColor: '#DEE2E6', marginBottom: 30 },
  activityText: { fontSize: 13, color: '#495057', paddingVertical: 8 },
  divider: { height: 1, backgroundColor: '#F1F3F5' },
});